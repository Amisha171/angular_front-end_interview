import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDataComponent } from './comment-data.component';

describe('CommentDataComponent', () => {
  let component: CommentDataComponent;
  let fixture: ComponentFixture<CommentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
