import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModulesRoutingModule } from './user-modules-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserModulesRoutingModule,
    ReactiveFormsModule,
    LayoutsModule,
    RouterModule
  ]
})
export class UserModulesModule { }
