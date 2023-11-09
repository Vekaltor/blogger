import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/models/posts.model';
import { PostsApiService } from 'src/app/core/services/posts-api.service';

@Component({
  selector: 'app-post-more',
  templateUrl: './post-more.component.html',
  styleUrls: ['./post-more.component.css'],
})
export class PostMoreComponent implements OnInit {
  public post: Post | undefined = undefined;

  constructor(
    private postsApiService: PostsApiService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  private getPost(id: number) {
    return this.postsApiService.getPostById(id).pipe();
  }

  private changeTitle(postTitle: string) {
    this.titleService.setTitle(postTitle);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const postId = params['id'];
      this.getPost(postId).subscribe((post) => {
        this.post = post;
        this.changeTitle(post?.title!);
      });
    });
  }
}
