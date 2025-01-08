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
  selector: 'app-sign-up',
  imports: [
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  ngOnInit(): void {
    console.log('Login component initialized');
  }
  name = '';
  lastname = '';
  email = '';
  password = '';
  repassword = '';
  apiKey = '';
  message = '';
  error = '';
  constructor(private authService: AuthService, private router: Router) {}
  onRegister() {
    if (this.password !== this.repassword) {
      this.error = 'Passwords do not match';
      return;
    }
    this.authService
      .register(
        this.name,
        this.lastname,
        this.email,
        this.password,
        this.repassword,
        this.apiKey
      )
      .subscribe({
        next: (response) => {
          this.message = response.message;
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.error = error.error.message || 'Something went wrong';
        },
        complete: () => {},
      });
  }
}
