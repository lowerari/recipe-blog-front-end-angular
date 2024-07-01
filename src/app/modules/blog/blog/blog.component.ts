import { Component, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  value = 5;

  showDialog = false;

  showEditDialog = false;

  postContent = 'This is a post/comment content. It can be edited.';

  confirmAction() {
    this.showDialog = true;
  }

  onDialogAccept() {
    console.log('Accepted');
    this.showDialog = false;
  }

  onDialogCancel() {
    console.log('Canceled');
    this.showDialog = false;
  }

  confirmEditAction() {
    this.showEditDialog = true;
  }

  onEditAccept() {
    console.log('Accepted');
    this.showEditDialog = false;
  }

  onEditCancel() {
    console.log('Canceled');
    this.showEditDialog = false;
  }

  // constructor(private confirmationService: ConfirmationService) {}

  // @ViewChild('deleteButton') deleteButton: any; //Locates and gets the delete button

  // ngAfterViewInit() {
  //   // Ensure deleteButton is available
  //   console.log(this.deleteButton);
  // }

  // confirmAction() {
  //   console.log('Confirming action');
  //   this.confirmationService.confirm({
  //     target: this.deleteButton.nativeElement, //Sets the target element for the confirmation dialog
  //     message: 'Are you sure you want to delete this?',
  //     accept: () => {
  //       console.log('Accepted');
  //     }
  //   });
  // }

  // ngOnInit() {
  // }

}
