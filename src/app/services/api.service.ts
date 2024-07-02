import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Options, Blog } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  get<T>(url: string, token: string, options?: Options): Observable<T> {
    // Ensure options is an object if not provided
    options = options || {};
    // Ensure headers exist in options, then add Authorization header
    options.headers = options.headers instanceof HttpHeaders ? options.headers : new HttpHeaders(options.headers);
    options.headers = options.headers.set('Authorization', `Token ${token}`);

    return this.http.get<T>(url, options) as Observable<T>;
  }

  post<T>(url: string, token: string, body: any, options?: Options): Observable<T> {
    options = options || {};
    options.headers = options.headers instanceof HttpHeaders ? options.headers : new HttpHeaders(options.headers);
    options.headers = options.headers.set('Authorization', `Token ${token}`);

    return this.http.post<T>(url, body, options) as Observable<T>;
  }
}
