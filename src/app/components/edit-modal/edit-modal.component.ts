import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.scss'
})
export class EditModalComponent {
  constructor (private formBuilder: FormBuilder) { }
  @Input() message: string = '';
  @Input() content: string = '';
  // @Output() accept = new EventEmitter<string>();
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
