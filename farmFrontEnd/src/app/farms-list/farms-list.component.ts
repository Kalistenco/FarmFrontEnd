import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farms-list',
  templateUrl: './farms-list.component.html',
  styleUrls: ['./farms-list.component.css']
})

export class FarmsListComponent implements OnInit {
  Farms: any = [];


  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
    this.loadFarms();
  }

  loadFarms() {
    return this.restApi.getFarms().subscribe(data => this.Farms = data);
  }
}
