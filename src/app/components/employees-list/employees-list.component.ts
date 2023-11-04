import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'John.doe@gmail.com',
      phone: 123456789,
      salary: 60000,
      department: 'Human Resource'
    },
    {
      id: '2',
      name: 'EMilia Clark',
      email: 'emilia.clark@gmail.com',
      phone: 987654321,
      salary: 70000,
      department: 'Marketing'
    },
    {
      id: '3',
      name: 'Kevin Leven',
      email: 'kevin.leven@gmail.com',
      phone: 2345098762,
      salary: 85000,
      department: 'Developer'
    },
  ];

  constructor(){}

  ngOnInit(): void {
    
  }

}
