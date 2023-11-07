import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { Test1Component } from './features/test1/test1.component';
import { RedirectToLoginDirective } from './shared/redirect-to-login.directive';
import { SharedModule } from './shared/shared.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CategoriesComponent } from './features/categories/categories.component';
import { CategoryService } from './core/services/category.service';
import { LoginComponent } from './core/auth/components/login/login.component';

import { CheckboxModule } from 'primeng/checkbox';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { FormsModule } from '@angular/forms';
import { PluginsComponent } from './features/plugins/plugins.component';
import { PostsComponent } from './features/posts/posts.component';
import { PostsApiService } from './core/services/posts-api.service';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ProfileComponent } from './features/profile/profile.component';
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    Test1Component,
    RedirectToLoginDirective,
    CategoriesComponent,
    LoginComponent,
    RegisterComponent,
    PluginsComponent,
    PostsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    SharedModule,
    CardModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    AvatarModule,
    AvatarGroupModule,
    ScrollTopModule,
  ],
  providers: [CategoryService, PostsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
