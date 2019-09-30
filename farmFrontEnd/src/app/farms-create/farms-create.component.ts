import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';
import { Farm } from '../shared/farm.model';

@Component({
  selector: 'app-farms-create',
  templateUrl: './farms-create.component.html',
  styleUrls: ['./farms-create.component.scss']
})
export class FarmsCreateComponent implements OnInit {

  @Input() farm : Farm = new Farm();

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
  }

  addFarm(dataFarm) {
    this.restApi.addFarm(this.farm)
      .subscribe((data: {}) => {
        this.router.navigate(['/farms-list'])
      });
      this.farm = new Farm()
  }
}
