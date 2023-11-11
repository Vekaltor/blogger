import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/models/posts.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input()
  public post!: Post;

  constructor(private router: Router) {}

  public handleRedirectToPost(idPost: number) {
    const path = `post/${idPost}`;
    this.router.navigate([path]);
  }
}
