import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsApiService } from 'src/app/core/services/posts-api.service';
import { PostsLoadingComponent } from './posts-loading/posts-loading.component';
import { RedirectToLoginDirective } from 'src/app/shared/redirect-to-login.directive';

@NgModule({
  declarations: [
    PostsComponent,
    PostsLoadingComponent,
    RedirectToLoginDirective,
  ],
  imports: [SharedModule],
  exports: [],
  providers: [PostsApiService],
})
export class PostsModule {}
