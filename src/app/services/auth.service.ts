import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

interface LoginResponse {
  access_token: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly _http = inject(HttpClient);
  private readonly _url = `${environment.apiUrl}/api`;

  login(email: string, password: string): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(`${this._url}/login`, { email, password });
  }

  register(name: string, email: string, password: string): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(`${this._url}/register`, { name, email, password });
  }

  getUser() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

    return this._http.get<User>(`${this._url}/user`, {
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
