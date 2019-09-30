import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Chicken } from '../shared/chicken.model';

@Component({
  selector: 'app-chickens-create',
  templateUrl: './chickens-create.component.html',
  styleUrls: ['./chickens-create.component.scss']
})
export class ChickensCreateComponent implements OnInit {

  @Input() chicken : Chicken = new Chicken;
  
  constructor(
    public restApi: RestApiService, 
    public router: Router, 
    private rutaActiva: ActivatedRoute) { }

  ngOnInit() {}

  addChicken(dataChicken){
    this.restApi.addChicken(this.rutaActiva.snapshot.params.id,this.chicken)
      .subscribe((data: {}) => {
      this.router.navigate(['/chickens-list', this.rutaActiva.snapshot.params.id])
    });
    this.chicken = new Chicken()
  }

}
