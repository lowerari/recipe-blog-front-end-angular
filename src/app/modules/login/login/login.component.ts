import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  logIn(username: string, password: string) {
    const url = 'https://salty-temple-86081-1a18659ec846.herokuapp.com/login/';
    const body = { username, password };

      this.http.post(url, body).subscribe({
        next: (response: any) => {
          console.log('Token:', response.token);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/blogs']);
        },
        error: (error: any) => {
          console.error('Error:', error);
        }
      });
  }

}
