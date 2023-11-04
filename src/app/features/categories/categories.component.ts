import { Component, OnInit } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { Category } from 'src/app/core/models/categories.model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  public categories: Observable<Category[]> = of([]);

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getMockCategories().subscribe((data) => {
      this.categories = this.categories.pipe(
        map((existingCategories) => [...existingCategories, ...data])
      );
    });
  }
}
