import { Component, OnInit } from '@angular/core';
import { ServDemoService } from '../serv-demo.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private dbl:ServDemoService ) { }

  ngOnInit(): void {
  }
  abc(myname:any){
    //myname
   this.dbl.dblogic(myname);
  }

}
