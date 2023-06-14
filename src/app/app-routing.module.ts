import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './share/component/dashbord/dashbord.component';
import { UserComponent } from './share/component/user/user.component';
import { CreateComponent } from './share/component/create/create.component';
import { TableComponent } from './share/component/table/table.component';
import { ChartComponent } from './share/component/chart/chart.component';
import { LoginComponent } from './share/component/login/login.component';
import { CreateCardComponent } from './share/component/create-card/create-card.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"logoicon",component:DashbordComponent},
  {path:"home",component:DashbordComponent},
  {path:"user",component:UserComponent},
  {path:"create",component:CreateComponent},
  {path:"table",component:TableComponent},
  {path:"chart",component:ChartComponent},
  {path:"card",component:CreateCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
