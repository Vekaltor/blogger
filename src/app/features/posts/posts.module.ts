import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [SharedModule],
  exports: [],
})
export class PostsModule {}
