import { Component, OnInit } from '@angular/core';
import { ServDemoService } from '../serv-demo.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  constructor(private aaa:ServDemoService) { }

  ngOnInit(): void {
  }
  // abc(){
  //   this.aaa.dblogic();
  // }

}
