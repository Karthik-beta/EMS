import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { CompanyComponent } from './company/company.component';
import { ShowComComponent } from './company/show-com/show-com.component';
import { AddEditComComponent } from './company/add-edit-com/add-edit-com.component';
import { DesignationComponent } from './designation/designation.component';
import { ShowDesComponent } from './designation/show-des/show-des.component';
import { AddEditDesComponent } from './designation/add-edit-des/add-edit-des.component';
import { LocationComponent } from './location/location.component';
import { AddEditLocComponent } from './location/add-edit-loc/add-edit-loc.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ShowLocComponent } from './location/show-loc/show-loc.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    CompanyComponent,
    ShowComComponent,
    AddEditComComponent,
    DesignationComponent,
    ShowDesComponent,
    AddEditDesComponent,
    LocationComponent,
    AddEditLocComponent,
    ShowLocComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
