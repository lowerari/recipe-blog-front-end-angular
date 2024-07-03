import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-comment',
  standalone: true,
  imports: [],
  templateUrl: './confirm-delete-comment.component.html',
  styleUrl: './confirm-delete-comment.component.scss'
})
export class ConfirmDeleteCommentComponent {
  @Input() message: string = '';
  @Output() accept = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.accept.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
