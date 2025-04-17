import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface LoginResponse {
  access_token: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:8000/api/login', { email, password });
  }

  register(name: string, email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:8000/api/register', { name, email, password });
  }

  getUser() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

    return this.http.get<User>('http://localhost:8000/api/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
    }
  }
}
