import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginsComponent } from './plugins.component';

describe('PluginsComponent', () => {
  let component: PluginsComponent;
  let fixture: ComponentFixture<PluginsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PluginsComponent]
    });
    fixture = TestBed.createComponent(PluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
