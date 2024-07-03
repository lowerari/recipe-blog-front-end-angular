import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor (private route: ActivatedRoute, private http: HttpClient, private commentsService: CommentsService, private router: Router) { }

  timestamp: string = '';
  title: string = '';
  author: string = '';
  author_id: number = 0;
  category: string = '';
  rating: number = 0;
  imageUrl: string = '';
  link: string = '';
  content: string = '';

  commentContent: string = '';

  individualCommentContent: string = '';
  commentBlogId: number = 0;

  showDialog = false;
  showDeleteCommentDialog = false;

  showEditDialog = false;
  showEditCommentDialog = false;

  comment_id: number = 0;

  user_id: number = 0;

  confirmAction() {
    this.showDialog = true;
  }

  confirmDeleteCommentAction(id: number) {
    this.showDeleteCommentDialog = true;
    this.comment_id = id;
    console.log('Comment ID:', this.comment_id); //works
  }

  confirmEditCommentAction(id: number, content: string, blog_id: number) {
    this.showEditCommentDialog = true;
    this.comment_id = id;
    this.individualCommentContent = content;
    this.commentBlogId = blog_id;
    console.log('Comment ID:', this.comment_id);
  }

  onDialogAccept() {
    console.log('Accepted');
    this.showDialog = false;
    this.deleteBlog();
  }

  onDeleteCommentAccept() {
    console.log('Accepted');
    this.showDeleteCommentDialog = false;
    this.deleteComment();
  }

  onDialogCancel() {
    console.log('Canceled');
    this.showDialog = false;
  }

  onDeleteCommentCancel() {
    console.log('Canceled');
    this.showDeleteCommentDialog = false;
  }

  confirmEditAction() {
    this.showEditDialog = true;
  }

  onEditAccept(updatedContent: string) {
    console.log('Accepted');
    this.content = updatedContent;
    this.showEditDialog = false;
    this.editBlog();
  }

  onEditCommentAccept(updatedContent: string) {
    console.log('Accepted');
    this.individualCommentContent = updatedContent;
    this.showEditCommentDialog = false;
    this.editComment();
  }

  onEditCancel() {
    console.log('Canceled');
    this.showEditDialog = false;
  }

  onEditCommentCancel() {
    console.log('Canceled');
    this.showEditCommentDialog = false;
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
        this.author_id = response.author;
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

  deleteBlog() {
    const url = `https://salty-temple-86081-1a18659ec846.herokuapp.com/blogs/${this.id}`;
    const token = localStorage.getItem('token') || ''; //Have to provide an alternative value for the case where the token is not available

    this.http.delete(url, { headers: { Authorization: `Token ${token}` } }).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        this.router.navigate(['/blogs']);
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });
  }

  editBlog() {
    const url = `https://salty-temple-86081-1a18659ec846.herokuapp.com/blogs/${this.id}/`; //so for future reference the url didn't work until I put the trailing / at the end
    const token = localStorage.getItem('token') || ''; //Have to provide an alternative value for the case where the token is not available
    const body = { title: this.title, rating: this.rating, category: this.category, picture: this.imageUrl, link: this.link, content: this.content };
    console.log('Body:', body);

    this.http.put(url, body, { headers: { Authorization: `Token ${token}` } }).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        this.fetchBlog(); //Refresh the blog
      },
      error: (error: any) => {
        console.error('Error:', error);
        console.log('Content:', this.content);
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

  deleteComment(){
    const url = `https://salty-temple-86081-1a18659ec846.herokuapp.com/comments/${this.comment_id}/`;
    const token = localStorage.getItem('token') || '';

    this.http.delete(url, { headers: { Authorization: `Token ${token}` } }).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        this.fetchComments(); //Refresh the comments
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });
  }

  editComment(){
    const url = `https://salty-temple-86081-1a18659ec846.herokuapp.com/comments/${this.comment_id}/`;
    const token = localStorage.getItem('token') || '';
    const body = { content: this.individualCommentContent, blog_id: this.commentBlogId };

    this.http.put(url, body, { headers: { Authorization: `Token ${token}` } }).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        this.fetchComments(); //Refresh the comments
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });
  }

  fetchUserData(){
    const url = `https://salty-temple-86081-1a18659ec846.herokuapp.com/user/`;
    const token = localStorage.getItem('token') || '';

    this.http.get(url, { headers: { Authorization: `Token ${token}` } }).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        this.user_id = response.id;
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    })
  }

  // constructor(private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); //Gets the id parameter from the route
    this.fetchBlog();
    this.fetchComments();
    this.fetchUserData();
  }

}
