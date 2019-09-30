import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Chicken } from '../shared/chicken.model';

@Component({
  selector: 'app-chickens-update',
  templateUrl: './chickens-update.component.html',
  styleUrls: ['./chickens-update.component.scss']
})

export class ChickensUpdateComponent implements OnInit {
    id = this.rutaActiva.snapshot.params['id'];
    chicken: any = {};

    constructor(
        public restApi: RestApiService,
        public rutaActiva: ActivatedRoute,
        public router: Router
        ) { }

   ngOnInit() {
    this.restApi.getChickens(this.id)
        .subscribe(data => this.chicken = data);
       }

  updateChicken(){
    this.restApi.updateChicken(this.id,this.chicken)
        .subscribe(data => {
        this.router.navigate(['/chickens-list',  this.rutaActiva.snapshot.params.id])
    });
  }
}
