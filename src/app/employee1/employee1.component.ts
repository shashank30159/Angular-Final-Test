import { Component, OnInit } from '@angular/core';
import { Employee1Service } from '../services/employee1.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component {

  filteredString:string='';
  employees:any=[];
  errMsg:any;
  constructor(proService:Employee1Service){
    proService.getEmployees1Info().subscribe(
      result => this.employees = result,
      error => this.errMsg = error
    )
  }

}
