import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs/blogs.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

import { TruncateNamePipe } from '../../pipes/truncate-name.pipe';


@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    DropdownModule,
    FormsModule,
    RatingModule,
    TruncateNamePipe
  ]
})
export class BlogsModule { }
