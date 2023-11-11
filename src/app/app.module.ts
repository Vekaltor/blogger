import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './features/home/home.module';
import { LoginComponent } from './core/auth/components/login/login.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalErrorHandler } from './core/errors/global-error-handler';
import { GlobalNotificationsHandler } from './core/errors/global-notifications-handler';
import { MessageService } from 'primeng/api';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/intereceptor/http-error.intereceptor';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    SharedModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [
    GlobalErrorHandler,
    GlobalNotificationsHandler,
    MessageService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
