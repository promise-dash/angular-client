import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  }
  editForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private employeeService: EmployeesService){
    this.editForm = fb.group({
      id: [''],
      name: [''],
      email: [''],
      phone: [''],
      salary: [''],
      department: [''],
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.employeeService.getEmployee(id).subscribe({
            next: (employee) => {
             this.employeeDetails = employee;

             if (this.employeeDetails) {
              this.editForm.patchValue({
                id: this.employeeDetails.id,
                name: this.employeeDetails.name,
                email: this.employeeDetails.email,
                phone: this.employeeDetails.phone,
                salary: this.employeeDetails.salary,
                department: this.employeeDetails.department,
              });
            }
            },
          });
        }
      }
    })
  }

  handleSaveChanges(){
    this.employeeService.updateEmployee(this.employeeDetails.id, this.editForm.value).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    })
  }

  handleDelete(id: string){
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    });
  }

}
