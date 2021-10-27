import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  mydata="";











  
  topic="Thanesh"
  contect=''

  mybutvalue="Caculat";
  myimg="../../assets/sap.jpg";

  company="IBM"
  mydesion="disabled"

  myroi:any;
  aaa(myval:any)
  {
    console.log("My Loan :  " + myval.target.value)
    if(myval.target.value=='Edu')
    {
      this.myroi=10;
    }
  }



  bbb(){
    console.log("bbb")
  }
  

  constructor() { }
  ngOnInit(): void {
  }
abc(){

}
}
