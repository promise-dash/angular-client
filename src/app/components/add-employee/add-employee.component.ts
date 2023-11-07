import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  addForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeesService, private router: Router){
    this.addForm = fb.group({
      id: '',
      name: '',
      email: '',
      phone: 0,
      salary: 0,
      department: '',
    });
  }

  handleSubmit(){
    this.employeeService.addEmployee(this.addForm.value).subscribe({
      next: (employee) => {
        this.router.navigate(['employees']);
      }  
    })
  }

}
