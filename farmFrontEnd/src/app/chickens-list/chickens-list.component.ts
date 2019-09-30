import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chickens-list',
  templateUrl: './chickens-list.component.html',
  styleUrls: ['./chickens-list.component.scss']
})

export class ChickensListComponent implements OnInit {
  Chickens: any = [];

  constructor(public restApi: RestApiService, private rutaActiva: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.loadChickens();
  }

  loadChickens() {
    return this.restApi.getChickens(this.rutaActiva.snapshot.params.id).subscribe(data => this.Chickens = data);
  }

  addEgg(id) {
    this.restApi.addEggs(id).subscribe(data => this.loadChickens());
  }

  deleteChicken(id) {
    if(window.confirm('Are you sure you want to delete this chicken?')) {
      this.restApi.deleteChicken(id)
      .subscribe(data => this.loadChickens());
    }
  }
  
  createChicken(){
    this.router.navigate(['/chickens-create', this.rutaActiva.snapshot.params.id])
  }

  updateChicken(chickenId){
    this.router.navigate(['/chickens-update', this.rutaActiva.snapshot.params.id, chickenId])
  }

}
