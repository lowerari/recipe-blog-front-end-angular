import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.scss'
})
export class EditModalComponent {
  @Input() message: string = '';
  @Input() content: string = '';
  @Output() accept = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.accept.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
