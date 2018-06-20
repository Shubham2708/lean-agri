import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPostComponent } from './get-all-post.component';

describe('GetAllPostComponent', () => {
  let component: GetAllPostComponent;
  let fixture: ComponentFixture<GetAllPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
