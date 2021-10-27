import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostomerReservationComponent } from './costomer-reservation.component';
import { expressionType } from '@angular/compiler/src/output/output_ast';

describe('Costomer Reservation Component', () => {
  
  //let costomerService=new CostomerReservationComponent;
   let costomerService: CostomerReservationComponent;
   const currentVal:any = 0; 
  beforeEach(() => {
    costomerService=new CostomerReservationComponent();
  });

  afterEach(() => {
      // costomerService=null;
  });
  beforeAll(()=>{

  })
  afterAll(()=>{

  })
  it('Consmor Reservation should increee the corret costomr by 1 ', () => {
    //let costomerService=new CostomerReservationComponent;
    let custCount=costomerService.resgisterCostomer();
    expect(custCount).toBe(11);
    
  });

  it('Consmor Reservation should Decress   the corret costomr by 1', () => {
   // let costomerService=new CostomerReservationComponent; 
   // make this as Goble Scope and Check 
    let custCount=costomerService.unResgisterCostomer();
    expect(custCount).toBe(9);
  });
});

describe("Room Reservation ",()=>{

  it('Testing Room is Reserved or Not ',()=>{
    //Arrange
    let custReserve=new CostomerReservationComponent();
    // Act 
      let isReserved=custReserve.reserveRoom();
    // Assert 
    expect(isReserved).toBeTruthy();


  })

   

describe("Different Methods  of Expect Block",function () { 
  describe("Different Methods of Expect Block",function () { 
    const value = null; 
   
    it("Example of toBeNull()", function () { 
       expect(value).toBeNull();
    });
 }); 
});
})
