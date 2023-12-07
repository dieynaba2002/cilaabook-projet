import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBlogComponent } from './ajout-blog.component';

describe('AjoutBlogComponent', () => {
  let component: AjoutBlogComponent;
  let fixture: ComponentFixture<AjoutBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutBlogComponent]
    });
    fixture = TestBed.createComponent(AjoutBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
