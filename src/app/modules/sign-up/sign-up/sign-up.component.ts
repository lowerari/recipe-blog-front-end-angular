import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  passwordsMatch() {
    return this.password === this.confirmPassword;
  }

  signUp(username: string, password: string) {
    if (this.passwordsMatch()){
      const url = 'https://salty-temple-86081-1a18659ec846.herokuapp.com/signup/';
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
    } else{
      console.error('Passwords do not match');
    }
    
  }
}
