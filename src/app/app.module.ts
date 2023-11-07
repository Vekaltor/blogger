import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './features/home/home.module';
import { LoginComponent } from './core/auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { RedirectToLoginDirective } from './shared/redirect-to-login.directive';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    RedirectToLoginDirective,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, HomeModule, SharedModule],
  exports: [],
  providers: [RedirectToLoginDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
