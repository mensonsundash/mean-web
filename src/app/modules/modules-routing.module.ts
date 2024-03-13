import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
    // loadChildren: () => import('./customer/customer.module').then( (m) => m.CustomerModule)
  },
  {
    path: "dashboard",
    component: DashboardComponent
    // loadChildren: () => import('./customer/customer.module').then( (m) => m.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
