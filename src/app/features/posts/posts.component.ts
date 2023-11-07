import { Component, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/posts.model';
import { PostsApiService } from 'src/app/core/services/posts-api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  @Output() public posts$: Observable<Array<Post>> =
    this.postsApiService.getFakePosts();

  constructor(private postsApiService: PostsApiService) {}
}
