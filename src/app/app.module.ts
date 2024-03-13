import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutsModule } from './layouts/layouts.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LayoutsAdminModule } from './layouts-admin/layouts-admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    RouterOutlet,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    LayoutsModule,
    LayoutsAdminModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule {

}
