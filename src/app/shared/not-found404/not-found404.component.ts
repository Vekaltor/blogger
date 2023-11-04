import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found404',
  templateUrl: './not-found404.component.html',
  styleUrls: ['./not-found404.component.css'],
})
export class NotFound404Component {
  constructor(private location: Location) {}

  public backToLastPage(): void {
    this.location.back();
  }
}
