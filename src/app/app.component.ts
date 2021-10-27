import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JsminDemo';
  myname:any;
  ROI(){
    console.log("5%")
  }


  abc(name:any,password:any){
    localStorage.setItem("username",name)
    console.log("Hi "+name +" My Pass : "+password)
  }
  mylogin(username:any){
     this.myname=localStorage.getItem("username")
     if(username==this.myname)
     {
       alert("Logged in ")
     }
     else{
      alert("InvALID ")
     }
  }  
  userdelete(){
    localStorage.removeItem("username")
  }
}
