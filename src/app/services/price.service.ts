import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ApiResponse {
  results: {
    currencies: { [key: string]: Currency };
  }
}

export interface Currency {
  sigla: string,
  buy: number;
  name: string;
  code: string;
  variation: number;
}

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  // private apiUrl = 'https://api.hgbrasil.com/finance?format=json-cors&key=b99232a3'
  private apiUrl = 'https://api.hgbrasil.com/finance?format=json-cors'

  constructor(
    private http: HttpClient
  ) { }

  getCurrencies(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl)
  }
}
