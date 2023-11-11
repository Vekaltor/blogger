import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { CategoriesComponent } from '../posts/components/categories/categories.component';
import { CategoryService } from 'src/app/core/services/category.service';
import { FooterComponent } from 'src/app/core/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/core/layout/header/header.component';
import { HomeComponent } from './home.component';
import { MenuService } from 'src/app/core/services/menu.service';
import { PostsModule } from '../posts/posts.module';
import { PluginsComponent } from 'src/app/shared/components/plugins/plugins.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPromptComponent } from 'src/app/shared/components/login-prompt/login-prompt.component';
import { LoginPromptService } from 'src/app/core/services/login-prompt.service';
import { ContactComponent } from 'src/app/shared/components/contact/contact.component';
import { NotFound404Component } from 'src/app/shared/components/not-found404/not-found404.component';
import { NotificationComponent } from 'src/app/shared/components/notification/notification.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PluginsComponent,
    LoginPromptComponent,
    ContactComponent,
    NotFound404Component,
    NotificationComponent,
  ],
  imports: [AppRoutingModule, PostsModule, SharedModule],
  exports: [],
  providers: [CategoryService, MenuService],
})
export class HomeModule {}
