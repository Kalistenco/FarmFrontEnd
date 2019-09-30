import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Farm } from './farm.model'
import { Chicken } from './chicken.model'

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiUrl= 'http://localhost:8080/api';

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getFarms(): Observable<Farm> {
    return this.http.get<Farm>(this.apiUrl + '/farms'); 
  }

  addFarm(farm: Object): Observable<Object> {
    return this.http.post(this.apiUrl + '/farms', farm);
  }

  getChickens(id): Observable<Farm> {
    return this.http.get<Farm>(this.apiUrl + '/farms/' + id +'/chickens'); 
  }

  addEggs(id): Observable<Chicken> {
    return this.http.post<Chicken>(this.apiUrl + '/chickens/' + id + '/eggs', null);
  }

  deleteChicken(id): Observable<Chicken> {
    return this.http.get<Chicken>(this.apiUrl + '/chickens/' + id);
  }

  addChicken(id, chicken: Object): Observable<Object> {
    return this.http.post(this.apiUrl + '/farms/' + id +'/chickens', chicken);
  }

  updateChicken(id, chicken: Object): Observable<Object> {
    console.log(id, JSON.stringify(chicken));
    return this.http.post(this.apiUrl + '/chickens/' + id, chicken);
  }
}
