import { Observable, delay, of } from 'rxjs';
import { posts } from 'src/mocks/posts.mock';
import { Post, PostParams } from '../models/posts.model';

export class PostsApiService {
  private params: PostParams = {};
  private perLoad: number = 5;

  public getPostById(id: number): Observable<Post | undefined> {
    return of(posts.find((post) => (post.id = id)));
  }

  public getRandomPosts(
    currentAmount: number,
    perLoad = this.perLoad
  ): Observable<Array<Post>> {
    return this.getFakePosts(perLoad, currentAmount);
  }

  public getPostsByParams(
    params: PostParams,
    currentAmount: number,
    perLoad = this.perLoad
  ): Observable<Array<Post>> {
    const fakeResponse: Array<Post> = posts;
    const { endIndex, startIndex } = this.getRangeOfPosts(
      perLoad,
      currentAmount
    );

    const filteredPosts: Array<Post> = fakeResponse
      .filter((post) => {
        return (
          (!params.id || post.id === params.id) &&
          (!params.author || post.author === params.author) &&
          (!params.categories ||
            params.categories.every((category) => post.tags.includes(category)))
        );
      })
      .slice(startIndex, endIndex);

    return of(filteredPosts).pipe(delay(3000));
  }

  public getPerLoad() {
    return this.perLoad;
  }

  private getFakePosts(
    perLoad: number,
    currentAmount: number
  ): Observable<Array<Post>> {
    const { endIndex, startIndex } = this.getRangeOfPosts(
      perLoad,
      currentAmount
    );
    return of(posts.slice(startIndex, endIndex)).pipe(delay(2000));
  }

  private getRangeOfPosts(perLoad: number, currentAmount: number) {
    const startIndex: number = currentAmount;
    const endIndex: number = startIndex + perLoad;
    return { startIndex, endIndex };
  }

  //MANIPULATION OF FAKE POSTS
  public hasMore(currentAmount: number): boolean {
    return currentAmount < posts.length;
  }
}
