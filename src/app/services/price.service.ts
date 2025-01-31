import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private apiUrl = '/api/finance?key=b99232a3'

  constructor(
    private http: HttpClient
  ) { }

  getCurrencies(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl)
  }
}
