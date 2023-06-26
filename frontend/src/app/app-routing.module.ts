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
import { Andon2Component } from './andon2/andon2.component';
import { Andon3Component } from './andon3/andon3.component';
import { AlertComponent } from './alert/alert.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { CategorywiseComponent } from './categorywise/categorywise.component';
import { AnalysislineComponent } from './analysisline/analysisline.component';
import { OeeanalysisComponent } from './oeeanalysis/oeeanalysis.component';
import { Alert2Component } from './alert2/alert2.component';
import { TodoComponent } from './todo/todo.component';
import { AndonbreakdownComponent } from './andonbreakdown/andonbreakdown.component';
import { MachineIdComponent } from './machine-id/machine-id.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { BreakdowncategoryComponent } from './breakdowncategory/breakdowncategory.component';
import { AssemblylineComponent } from './assemblyline/assemblyline.component';
import { ShopfloorComponent } from './shopfloor/shopfloor.component';
import { SubbreakdownComponent } from './subbreakdown/subbreakdown.component';
import { SubassemblylineComponent } from './subassemblyline/subassemblyline.component';
import { ProductreceipeComponent } from './productreceipe/productreceipe.component';


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
{path: 'andon', component:AndonComponent},
{path: 'andon2', component:Andon2Component},
{path: 'andon3', component:Andon3Component},
{path: 'alert', component: AlertComponent},
{path: 'bd', component: BreakdownComponent},
{path: 'categorywise', component: CategorywiseComponent},
{path: 'line', component: AnalysislineComponent},
{path: 'oee', component: OeeanalysisComponent},
{path: 'alert2', component: Alert2Component},
{path: 'todo', component: TodoComponent},
{path: 'andonb', component: AndonbreakdownComponent},
{path: 'machine-id', component: MachineIdComponent},
{path: 'product-id', component: ProductIdComponent},
{path: 'bdc', component: BreakdowncategoryComponent},
{path: 'assemblyline', component: AssemblylineComponent},
{path: 'shopfloor', component: ShopfloorComponent},
{path: 'sbdc', component: SubbreakdownComponent},
{path: 'sal', component: SubassemblylineComponent},
{path: 'pr', component: ProductreceipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
