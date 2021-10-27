import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costomer-reservation',
  templateUrl: './costomer-reservation.component.html',
  styleUrls: ['./costomer-reservation.component.css']
})
export class CostomerReservationComponent implements OnInit {

  hotelRoomCapacity=30;
  costomerCount=10;

  resgisterCostomer(){
    return ++this.costomerCount;
  }

  unResgisterCostomer(){
    return --this.costomerCount;
  }
  reserveRoom():boolean{
    let roomReserved=false;
      if(this.costomerCount<this.hotelRoomCapacity)
      {
        this.costomerCount++;
         roomReserved=true;
      }
    return roomReserved
  }
  // constructor() { }

  ngOnInit(): void {
  }

}
