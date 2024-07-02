import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../../services/blogs.service';
import { Blog } from '../../../../types';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit {
  categories = [
    {name: 'All', value: 'all'},
    {name: 'Breakfast', value: 'breakfast'},
    {name: 'Lunch', value: 'lunch'},
    {name: 'Dinner', value: 'dinner'},
    {name: 'Dessert', value: 'dessert'}
  ];

  selectedCategory = 'all'; // Property to bind with ngModel

  constructor( private blogsService: BlogsService) { }

  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];

  fetchBlogs() {
    const url = 'https://salty-temple-86081-1a18659ec846.herokuapp.com/blogs/';
    const token = localStorage.getItem('token') || ''; //Have to provide an alternative value for the case where the token is not available
    this.blogsService.getBlogs(url, token).subscribe((blogs: Blog[]) => {
      console.log('Response:', blogs); //Works
      this.blogs = blogs;
      console.log('Blogs:', this.blogs);//Now this works, too.
      this.filterBlogs();
    })
  }

  filterBlogs() {
    console.log('Filtering blogs for category:', this.selectedCategory);
    if(this.selectedCategory == 'all') {
      this.filteredBlogs = this.blogs;
    } else {
      this.filteredBlogs = this.blogs.filter((blog: Blog) => blog.category.toLowerCase() == this.selectedCategory.toLowerCase()); //gotta keep it case insensitive
    }
  } //Had to change the html to use filteredBlogs instead of blogs

  ngOnInit(): void {
    this.fetchBlogs();
  }

}
