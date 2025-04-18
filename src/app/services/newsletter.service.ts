import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  // private apiUrl = 'https://olgacolor-email-api.onrender.com/send-email'
  private apiUrl = 'http://localhost:8000/api/send-email'

  constructor(private http: HttpClient) { }

  sendEmail(to: string, subject: string, body: string): Observable<any> {
    const payload = { to, subject, body }
    return this.http.post(this.apiUrl, payload)
  }
}
