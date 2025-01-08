import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


interface LoginResponse {
  message: string;
  error?: string;
}

interface RegisterResponse {
  message: string;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiBaseUrl = 'https://wecanrace.it';
  constructor(private http: HttpClient) {}

  login(email: string, password: string, apiKey: string): Observable<LoginResponse> {
    const headers = new HttpHeaders({ 'x-api-key': apiKey });
    const body = { email, password };

    return this.http.post<LoginResponse>(`${this.apiBaseUrl}/auth/login`, body, { headers });
  }

  register(
    name: string,
    lastname: string,
    email: string,
    password: string,
    repassword: string,
    apiKey: string
  ): Observable<RegisterResponse> {
    const headers = new HttpHeaders({ 'x-api-key': apiKey });
    const body = { name, lastname, email, password, repassword };

    return this.http.post<RegisterResponse>(`${this.apiBaseUrl}/auth/register`, body, { headers });
  }
}
