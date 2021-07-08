import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Employee1Service {

  url:string = 'assets/employee1.json';//local
  constructor(private httpClient:HttpClient) { }
  getEmployees1Info(){
     return this.httpClient.get(this.url)
}
}
