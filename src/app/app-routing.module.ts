import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth/auth-guard.guard';
import { ContactComponent } from './shared/components/contact/contact.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { NotFound404Component } from './shared/components/not-found404/not-found404.component';
import { PostsComponent } from './features/posts/posts.component';
import { ProfileComponent } from './features/profile/profile.component';
import { RegisterComponent } from './core/auth/components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: PostsComponent },
      { path: 'contact', component: ContactComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
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
