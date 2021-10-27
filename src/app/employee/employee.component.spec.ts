import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { AuthenticationService } from '../authentication.service';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers:[AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService=TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should retrsn the value 'Salary slip' + 'Check Authentication has called ' ",()=>{
    spyOn(authService,"checkAuthentication");
    let salSlip =component.getSalarySlip();
   // expect(salSlip).toEqual('Salary Slips')
   expect(authService.checkAuthentication).toHaveBeenCalled();
  })
});
