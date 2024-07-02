import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Blog } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor( private apiService: ApiService) { }

  getBlogs(url: string, token: string): Observable<Blog[]> {
    // // Prepare the headers
    // const options = {
    //   headers: {
    //     Authorization: `Token ${token}`
    //   },
    //   responseType: 'json' as const // Ensuring the type is compatible with Angular's HttpClient
    // };

    return this.apiService.get<Blog[]>(url, token);
  }
}
