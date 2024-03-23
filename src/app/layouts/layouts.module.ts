import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { PheaderComponent } from './page-layout/pheader/pheader.component';
import { PfooterComponent } from './page-layout/pfooter/pfooter.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UtopBarComponent } from './user-layout/utop-bar/utop-bar.component';
import { UsideBarComponent } from './user-layout/uside-bar/uside-bar.component';
import { UfooterComponent } from './user-layout/ufooter/ufooter.component';
import { AtopBarComponent } from './admin-layout/atop-bar/atop-bar.component';
import { AsideBarComponent } from './admin-layout/aside-bar/aside-bar.component';
import { AfooterComponent } from './admin-layout/afooter/afooter.component';

@NgModule({
  declarations: [
    PageLayoutComponent,
      PheaderComponent,
      PfooterComponent,
    UserLayoutComponent,
      UtopBarComponent,
      UsideBarComponent,
      UfooterComponent,
    AdminLayoutComponent,
      AtopBarComponent,
      AsideBarComponent,
      AfooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
