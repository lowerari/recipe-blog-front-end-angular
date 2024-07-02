import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  constructor(private http: HttpClient) { }

  title:string = '';
  rating:number = 0;
  category:string = '';
  imageUrl:string = '';
  recipeLink:string = '';
  content:string = '';
  selectedFile: File | null = null;

  post() {
    const url = 'https://salty-temple-86081-1a18659ec846.herokuapp.com/blogs/';
    const token = localStorage.getItem('token') || ''; //Have to provide an alternative value for the case where the token is not available
    // const body = { title: this.title, rating: this.rating, category: this.category, picture: this.imageUrl, link: this.recipeLink, content: this.content };
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('rating', this.rating.toString());
    formData.append('category', this.category);
    formData.append('link', this.recipeLink);
    formData.append('content', this.content);
    if(this.selectedFile) {
      formData.append('picture', this.selectedFile, this.selectedFile.name);
    }

    this.http.post(url, formData, { headers: { Authorization: `Token ${token}` } }).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile);
  
      // Optionally, if you want to display the image preview
      // const reader = new FileReader();
      // reader.onload = (e) => this.imageUrl = reader.result as string;
      // reader.readAsDataURL(file);
  
      // Here you can also upload the file to your server
      // For example, using FormData to append the file and send it via HTTP
    }
  }

}
