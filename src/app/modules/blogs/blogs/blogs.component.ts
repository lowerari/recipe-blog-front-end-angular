import { Component, OnInit } from '@angular/core';

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

  value = 5;
  selectedCategory: any = null; // Property to bind with ngModel

  constructor() { }

  ngOnInit(): void {
  }

}
