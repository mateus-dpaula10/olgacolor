import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class NewsletterService {

  private readonly _http = inject(HttpClient);
  private readonly _url = `${environment.apiUrl}/api/send-email`;

  sendEmail(to: string, subject: string, body: string): Observable<any> {
    const payload = { to, subject, body }
    return this._http.post(this._url, payload)
  }
}
