import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    console.log('Login component initialized');
  }
  email = '';
  password = '';
  apiKey = '';
  message = '';
  error = '';
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (!this.email || !this.password || !this.apiKey) {
      this.error = 'Please fill all the fields';
      return;
    }
    this.authService.login(this.email, this.password, this.apiKey).subscribe({
      next: (response) => {
        this.message = response.message;
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.error = error.error.message || 'Something went wrong';
      },
      complete: () => {},
    });
  }
}
