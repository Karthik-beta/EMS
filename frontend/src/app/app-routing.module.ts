import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import {CompanyComponent} from './company/company.component';
import {DesignationComponent} from './designation/designation.component';
import {LocationComponent} from './location/location.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AndonhelpComponent } from './andonhelp/andonhelp.component';
import { AndonComponent } from './andon/andon.component';


const routes: Routes = [
{path: '', redirectTo:'login', pathMatch:'full'},
{path: 'employee', component:EmployeeComponent},
{path: 'department', component:DepartmentComponent},
{path: 'company', component:CompanyComponent},
{path: 'designation', component:DesignationComponent},
{path: 'location', component:LocationComponent},
{path: 'login', component:LoginComponent},
{path: 'signup', component:SignupComponent},
{path: 'admin', component:AdminComponent},
{path: 'home', component:HomeComponent},
{path: 'andon-help', component:AndonhelpComponent},
{path: 'andon', component:AndonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
