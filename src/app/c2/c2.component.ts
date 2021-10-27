import { Component, OnInit } from '@angular/core';
import { ServDemoService } from '../serv-demo.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private xyz:ServDemoService) { }

  ngOnInit(): void {
  }
  servname=''
  abc(){
    this.servname=this.xyz.name;
    
  }
}
