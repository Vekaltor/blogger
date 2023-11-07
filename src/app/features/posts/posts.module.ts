import { NgModule } from '@angular/core';

import { PostsApiService } from 'src/app/core/services/posts-api.service';
import { PostsComponent } from './posts.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [SharedModule],
  exports: [],
  providers: [PostsApiService],
})
export class PostsModule {}
