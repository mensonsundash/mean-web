import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SignupComponent
  ]
})
export class AccountModule { }
