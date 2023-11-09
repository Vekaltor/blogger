import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMoreComponent } from './post-more.component';

describe('PostMoreComponent', () => {
  let component: PostMoreComponent;
  let fixture: ComponentFixture<PostMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostMoreComponent]
    });
    fixture = TestBed.createComponent(PostMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
