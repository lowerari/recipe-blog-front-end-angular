import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Comment } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor( private apiService: ApiService) { }

  getComments(url: string, token: string): Observable<Comment[]> {
    return this.apiService.get<Comment[]>(url, token);
  }
}
