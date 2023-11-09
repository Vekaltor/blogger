import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './features/home/home.module';
import { LoginComponent } from './core/auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './features/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
