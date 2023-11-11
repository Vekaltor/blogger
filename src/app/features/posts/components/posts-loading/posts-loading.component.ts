import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts-loading',
  templateUrl: './posts-loading.component.html',
})
export class PostsLoadingComponent {
  @Input()
  public perLoad!: number;

  public getRange(): number[] {
    return new Array(this.perLoad).fill(0).map((_, i) => i);
  }
}
