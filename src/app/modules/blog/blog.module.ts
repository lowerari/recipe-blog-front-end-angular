import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { EditModalComponent } from '../../components/edit-modal/edit-modal.component';
import { ConfirmDeleteCommentComponent } from '../../components/confirm-delete-comment/confirm-delete-comment.component';
import { EditCommentModalComponent } from '../../components/edit-comment-modal/edit-comment-modal.component';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RatingModule,
    FormsModule,
    ConfirmPopupModule,
    ConfirmationDialogComponent,
    EditModalComponent,
    ConfirmDeleteCommentComponent,
    EditCommentModalComponent
  ],
  providers: [ConfirmationService]
})
export class BlogModule { }
