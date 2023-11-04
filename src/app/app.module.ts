import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { Test1Component } from './features/test1/test1.component';
import { Test2Component } from './features/test2/test2.component';
import { RedirectToLoginDirective } from './shared/redirect-to-login.directive';
import { SharedModule } from './shared/shared.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CategoriesComponent } from './features/categories/categories.component';
import { CategoryService } from './core/services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    Test1Component,
    Test2Component,
    RedirectToLoginDirective,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    SharedModule,
    CardModule,
    ButtonModule,
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
