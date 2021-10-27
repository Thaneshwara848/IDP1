import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServDemoService {

  constructor() { }

  name=''
  dblogic(myname:any){
    console.log("MY Name is:  " + myname )
    this.name=myname;
  }
}
