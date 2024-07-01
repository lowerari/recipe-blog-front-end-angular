import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RatingModule,
    FormsModule
  ]
})
export class BlogModule { }
