import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/categories.model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  public categories: Observable<Category[]> =
    this.categoryService.getMockCategories();

  constructor(private categoryService: CategoryService) {}
}
