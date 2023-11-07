import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './core/auth/auth-guard.guard';

import { NotFound404Component } from './shared/not-found404/not-found404.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { Test1Component } from './features/test1/test1.component';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { PostsComponent } from './features/posts/posts.component';
import { ProfileComponent } from './features/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: PostsComponent },
      { path: 'contact', component: Test1Component },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      { path: 'secret1', component: Test1Component, canActivate: [AuthGuard] },
    ],
  },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'NotFound404', component: NotFound404Component },
  { path: '**', redirectTo: 'NotFound404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
