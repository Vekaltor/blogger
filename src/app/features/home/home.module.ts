import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { CategoriesComponent } from '../../shared/components/categories/categories.component';
import { CategoryService } from 'src/app/core/services/category.service';
import { FooterComponent } from 'src/app/core/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/core/layout/header/header.component';
import { HomeComponent } from './home.component';
import { MenuService } from 'src/app/core/services/menu.service';
import { PostsModule } from '../posts/posts.module';
import { PluginsComponent } from 'src/app/shared/components/plugins/plugins.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { Test1Component } from 'src/app/shared/components/test1/test1.component';
import { LoginPromptComponent } from 'src/app/shared/components/login-prompt/login-prompt.component';
import { LoginPromptService } from 'src/app/core/services/login-prompt.service';
import { ContactComponent } from 'src/app/shared/components/contact/contact.component';
import { NotFound404Component } from 'src/app/shared/components/not-found404/not-found404.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PluginsComponent,
    Test1Component,
    LoginPromptComponent,
    ContactComponent,
    NotFound404Component,
  ],
  imports: [AppRoutingModule, PostsModule, SharedModule],
  exports: [],
  providers: [CategoryService, MenuService, LoginPromptService],
})
export class HomeModule {}
