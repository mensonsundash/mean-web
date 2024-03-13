import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsAdminComponent } from './layouts-admin.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutsAdminComponent,
      TopbarComponent,
      SidebarComponent,
      FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsAdminModule { }
