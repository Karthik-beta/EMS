import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

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
import { AndonhelpComponent } from './andonhelp/andonhelp.component';
import { ShowAndComponent } from './andonhelp/show-and/show-and.component';
import { AddEditAndComponent } from './andonhelp/add-edit-and/add-edit-and.component';
import { AndonComponent } from './andon/andon.component';
import { Andon2Component } from './andon2/andon2.component';
import { Andon3Component } from './andon3/andon3.component';
import { ShowAnd3Component } from './andon3/show-and3/show-and3.component';
import { AddEditAnd3Component } from './andon3/add-edit-and3/add-edit-and3.component';
import { AlertComponent } from './alert/alert.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { CategorywiseComponent } from './categorywise/categorywise.component';
import { AnalysislineComponent } from './analysisline/analysisline.component';
import { OeeanalysisComponent } from './oeeanalysis/oeeanalysis.component';
import { Alert2Component } from './alert2/alert2.component';


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
    HomeComponent,
    AndonhelpComponent,
    ShowAndComponent,
    AddEditAndComponent,
    AndonComponent,
    Andon2Component,
    Andon3Component,
    ShowAnd3Component,
    AddEditAnd3Component,
    AlertComponent,
    BreakdownComponent,
    CategorywiseComponent,
    AnalysislineComponent,
    OeeanalysisComponent,
    Alert2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CanvasJSAngularChartsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
