import { Observable, delay, of } from 'rxjs';
import { posts } from 'src/mocks/posts.mock';
import { Post } from '../models/posts.model';

export class PostsApiService {
  public getFakePosts(): Observable<Array<Post>> {
    return of(posts).pipe(delay(2000));
  }

  public getPostById(id: number): Observable<Post | undefined> {
    return of(posts.find((post) => (post.id = id)));
  }
}
