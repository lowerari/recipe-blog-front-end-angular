import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../../../types';
import { CommentsService } from '../../../services/comments.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  id: string | null = null;

  constructor (private route: ActivatedRoute, private http: HttpClient, private commentsService: CommentsService) { }

  timestamp: string = '';
  title: string = '';
  author: string = '';
  category: string = '';
  rating: number = 0;
  imageUrl: string = '';
  link: string = '';
  content: string = '';

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

  fetchBlog() {
    const url = `https://salty-temple-86081-1a18659ec846.herokuapp.com/blogs/${this.id}`;
    const token = localStorage.getItem('token') || ''; //Have to provide an alternative value for the case where the token is not available
    this.http.get(url, { headers: { Authorization: `Token ${token}` } }).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        this.timestamp = response.timestamp;
        this.title = response.title;
        this.author = response.author_username;
        this.category = response.category;
        this.rating = response.rating;
        this.imageUrl = response.picture;
        this.link = response.link;
        this.content = response.content;
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });
  }

  comments: Comment[] = [];

  fetchComments(){
    const url = `https://salty-temple-86081-1a18659ec846.herokuapp.com/blogs/${this.id}/comments/`;
    const token = localStorage.getItem('token') || ''; //Have to provide an alternative value for the case where the token is not available
    this.commentsService.getComments(url, token).subscribe((comments: Comment[]) => {
      console.log('Response:', comments);
      this.comments = comments;
    });
  }

  commentContent = '';

  postComment() {
    const url = `https://salty-temple-86081-1a18659ec846.herokuapp.com/blogs/${this.id}/comments/`;
    const body = { content: this.commentContent };
    const token = localStorage.getItem('token') || ''; //Have to provide an alternative value for the case where the token is not available

    this.http.post(url, body, { headers: { Authorization: `Token ${token}` } }).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        this.fetchComments(); //Refresh the comments
        this.commentContent = ''; //Clear the comment content
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });   
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

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); //Gets the id parameter from the route
    this.fetchBlog();
    this.fetchComments();
  }

}
