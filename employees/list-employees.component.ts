import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  
  templateUrl: './list-employees.component.html',
  styles: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  
  employees: Employee [] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@mmail.com',
      dateOfBirth: new Date('03/17/1990'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/boy.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Email',
      email: 'mary@mmail.com',
      dateOfBirth: new Date('03/17/1990'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/girl.png'
    },
    {
      id: 3,
      name: 'Mars',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mars@mmail.com',
      dateOfBirth: new Date('03/17/1990'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/child.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
