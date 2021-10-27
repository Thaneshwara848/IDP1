import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
    this.authService.authenticate();
   }
   getSalarySlip(){
     if(this.authService.checkAuthentication()){
     return "Salary Slips";
     }
     return "Not Authticated";
   }

  ngOnInit(): void {
  }

}
