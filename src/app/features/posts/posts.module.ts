import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { PostsApiService } from 'src/app/core/services/posts-api.service';
import { PostsLoadingComponent } from './components/posts-loading/posts-loading.component';
import { PostComponent } from './components/post/post.component';
import { PostMoreComponent } from './components/post-more/post-more.component';
import { ListPostsComponent } from './containers/list-posts/list-posts.component';

@NgModule({
  declarations: [
    PostsLoadingComponent,
    PostComponent,
    PostMoreComponent,
    ListPostsComponent,
  ],
  imports: [SharedModule],
  exports: [],
  providers: [PostsApiService],
})
export class PostsModule {}
