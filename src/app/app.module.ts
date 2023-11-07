import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedirectToLoginDirective } from './shared/redirect-to-login.directive';
import { SharedModule } from './shared/shared.module';
import { CategoryService } from './core/services/category.service';
import { LoginComponent } from './core/auth/components/login/login.component';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { FormsModule } from '@angular/forms';
import { PostsApiService } from './core/services/posts-api.service';
import { HomeModule } from './features/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    RedirectToLoginDirective,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HomeModule,
    SharedModule,
  ],
  providers: [CategoryService, PostsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
