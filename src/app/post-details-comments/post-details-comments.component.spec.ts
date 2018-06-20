import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsCommentsComponent } from './post-details-comments.component';

describe('PostDetailsCommentsComponent', () => {
  let component: PostDetailsCommentsComponent;
  let fixture: ComponentFixture<PostDetailsCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailsCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
