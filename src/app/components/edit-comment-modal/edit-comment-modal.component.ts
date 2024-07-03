import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-comment-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-comment-modal.component.html',
  styleUrl: './edit-comment-modal.component.scss'
})
export class EditCommentModalComponent {
  constructor (private formBuilder: FormBuilder) { }
  @Input() message: string = '';
  @Input() content: string = '';
  @Output() cancel = new EventEmitter<void>();
  @Output() accept = new EventEmitter<string>();

  editForm = this.formBuilder.group({
    newContent: ['']
  });

  ngOnInit() {
    // Initialize form control with input content
    this.editForm.patchValue({ newContent: this.content });
  }

  onConfirm() {
    this.accept.emit(
      this.editForm.value.newContent || ''
    );
  }

  onCancel() {
    this.cancel.emit();
  }
}
