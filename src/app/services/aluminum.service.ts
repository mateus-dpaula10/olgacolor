import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AluminumService {
  private apiUrl = 'https://api.metals.dev/v1/latest?api_key=5FQOMACIXXYL6OI4EW9A514I4EW9A&currency=USD&unit=kg'

  constructor(private http: HttpClient) { }

  getAluminum(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
}
