import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoanComponent } from './loan/loan.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { EduComponent } from './loan/edu/edu.component';
import { compileClassMetadata } from '@angular/compiler';
import { ErrorcoComponent } from './errorco/errorco.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:"signup",
    component:RegisterComponent,
  },
  {
    path:"loan",
    children:[
      {
        path:'edu',
        component:EduComponent
      },
      
    ]
   
  },
  {
    path:"galary",
    component:GallaryComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:"err",
    component:ErrorcoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
