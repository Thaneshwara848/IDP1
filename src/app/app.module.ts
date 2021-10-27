import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CostomerReservationComponent } from './costomer-reservation/costomer-reservation.component';
import { EmployeeComponent } from './employee/employee.component';
import { TempletdrivenformComponent } from './templetdrivenform/templetdrivenform.component';
import { ReactivedrivenformComponent } from './reactivedrivenform/reactivedrivenform.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoanComponent } from './loan/loan.component';
import { EduComponent } from './loan/edu/edu.component';
import { PersonalComponent } from './loan/personal/personal.component';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ErrorcoComponent } from './errorco/errorco.component';
import { DatabindComponent } from './databind/databind.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';

@NgModule({
  declarations: [
    AppComponent,
    CostomerReservationComponent,
    EmployeeComponent,
    TempletdrivenformComponent,
    ReactivedrivenformComponent,
    LoginComponent,
    RegisterComponent,
    LoanComponent,
    EduComponent,
    PersonalComponent,
    HomeComponent,
    GallaryComponent,
    ErrorcoComponent,
    DatabindComponent,
    C1Component,
    C2Component,
    C3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
