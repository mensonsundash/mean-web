import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { LayoutsAdminComponent } from './layouts-admin/layouts-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./account/account.module').then( (m) => m.AccountModule)
  },
  {
    path: 'account',
    component: LayoutsAdminComponent,
    loadChildren: () => import('./modules/modules.module').then((m) => m.ModulesModule),
    // canActivate: [AuthGuard]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
