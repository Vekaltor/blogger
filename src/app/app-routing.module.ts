import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AuthGuard, IsLoggedGuard } from './core/auth/auth-guard.guard';
import { Test1Component } from './features/test1/test1.component';
import { Test2Component } from './features/test2/test2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth/login',
    component: Test1Component,
  },
  {
    path: 'auth/register',
    component: Test2Component,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
