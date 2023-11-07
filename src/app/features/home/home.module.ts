import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { CategoriesComponent } from '../categories/categories.component';
import { FooterComponent } from 'src/app/core/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/core/layout/header/header.component';
import { HomeComponent } from './home.component';
import { PostsModule } from '../posts/posts.module';
import { PluginsComponent } from 'src/app/shared/components/plugins/plugins.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { Test1Component } from 'src/app/shared/components/test1/test1.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PluginsComponent,
    Test1Component,
  ],
  imports: [AppRoutingModule, PostsModule, SharedModule],
})
export class HomeModule {}
