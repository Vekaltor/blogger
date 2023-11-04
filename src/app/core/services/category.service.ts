import { Observable, of } from 'rxjs';
import { Category } from '../models/categories.model';
import categories from 'src/mocks/categories.mock';

export class CategoryService {
  public getMockCategories(): Observable<Array<Category>> {
    return of(categories);
  }
}
