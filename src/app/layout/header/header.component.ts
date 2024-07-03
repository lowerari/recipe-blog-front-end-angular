import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor (private http: HttpClient, private router: Router, private cdr: ChangeDetectorRef) { }

  token: string = localStorage.getItem('token') || '';

  logOut(){
    const url = 'https://salty-temple-86081-1a18659ec846.herokuapp.com/logout/';
    const token = this.token;
    this.http.post(url, {}, { headers: { Authorization: `Token ${token}` } }).subscribe((data) => {
      console.log(data);
      localStorage.removeItem('token');
      this.token = '';
      this.cdr.detectChanges(); // Manually trigger change detection
      this.router.navigate(['/']);
    });
  }

}
