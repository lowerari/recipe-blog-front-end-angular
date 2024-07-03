import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteCommentComponent } from './confirm-delete-comment.component';

describe('ConfirmDeleteCommentComponent', () => {
  let component: ConfirmDeleteCommentComponent;
  let fixture: ComponentFixture<ConfirmDeleteCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDeleteCommentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
