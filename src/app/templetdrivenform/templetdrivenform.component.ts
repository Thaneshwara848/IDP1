import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-templetdrivenform',
  templateUrl: './templetdrivenform.component.html',
  styleUrls: ['./templetdrivenform.component.css']
})
export class TempletdrivenformComponent implements OnInit {

  // myForm: FormGroup | undefined;
  
  // @ViewChild('forgetForm', { static: true }) 
  // forgetForm:NgForm|any;
  // message : string |any;
  // username:string | any;

  // constructor() { }

  ngOnInit(): void {
  }
  // public submitForm(){
  //   if(this.forgetForm.valid)
  //   {
  //     this.message='Email sent to Password RESET ';
  //     this.username='';
  //     this.forgetForm.reset();
  //   }
  // }

}
