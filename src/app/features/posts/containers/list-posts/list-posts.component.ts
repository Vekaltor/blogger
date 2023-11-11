import { Component, HostListener, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostParams } from 'src/app/core/models/posts.model';
import { PostsApiService } from 'src/app/core/services/posts-api.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
})
export class ListPostsComponent implements OnInit {
  @Output()
  public posts: Array<Post> = [];
  protected loading: boolean = false;

  constructor(
    protected postsApiService: PostsApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.posts.length === 0) this.loadPosts();
  }

  @HostListener('window:scroll')
  public onScroll(): void {
    if (this.loading) return;

    const windowHeight =
      'ScrollY' in window ? window.scrollY : document.documentElement.scrollTop;
    const windowBottom = windowHeight + window.innerHeight;

    const indexLastPost = this.posts[this.posts.length - 1].id;
    const lastPost = document.getElementById(`${indexLastPost}`);

    if (lastPost) {
      const lastPostBottom = lastPost.offsetTop + lastPost.offsetHeight;
      console.log(
        '\nWINDOW BOTTOM ' + windowBottom,
        '\nPost BOTTOM' + lastPostBottom,
        this.posts,
        this.posts
      );
      if (
        windowBottom >= lastPostBottom &&
        this.postsApiService.hasMore(this.posts.length)
      ) {
        this.loadPosts();
      }
    }
  }

  private loadPosts() {
    this.loading = true;
    this.route.params.subscribe((params) => {
      this.isParam(params)
        ? this.fetchedPostsByParams(params)
        : this.fetchedRandomPosts();
    });
  }

  private fetchedPostsByParams(params: PostParams): void {
    this.postsApiService
      .getPostsByParams(params, this.posts.length)
      .subscribe((posts) => {
        this.posts = [...this.posts, ...posts];
        this.loading = false;
      });
  }

  private fetchedRandomPosts(): void {
    this.postsApiService
      .getRandomPosts(this.posts.length)
      .subscribe((posts) => {
        this.posts = [...this.posts, ...posts];
        this.loading = false;
      });
  }

  private isParam(params: PostParams): boolean {
    return (
      params.author !== undefined ||
      !!params.categories?.length ||
      params.id !== undefined
    );
  }
}
