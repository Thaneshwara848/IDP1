import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletdrivenformComponent } from './templetdrivenform.component';
import { FormsModule } from '@angular/forms';

describe('TempletdrivenformComponent', () => {
  let component: TempletdrivenformComponent;
  let fixture: ComponentFixture<TempletdrivenformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletdrivenformComponent ],
      imports :[FormsModule] // add manually 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletdrivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
