import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './features/home/home.module';
import { LoginComponent } from './core/auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [AppRoutingModule, BrowserModule, HomeModule, SharedModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
