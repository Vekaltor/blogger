import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsApiService } from 'src/app/core/services/posts-api.service';
import { PostsLoadingComponent } from './components/posts-loading/posts-loading.component';
import { PostComponent } from './components/post/post.component';
import { PostMoreComponent } from './components/post-more/post-more.component';

@NgModule({
  declarations: [PostsComponent, PostsLoadingComponent, PostComponent, PostMoreComponent],
  imports: [SharedModule],
  exports: [],
  providers: [PostsApiService],
})
export class PostsModule {}
