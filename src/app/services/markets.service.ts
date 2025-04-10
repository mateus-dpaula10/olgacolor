import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketsService {
  constructor(private http: HttpClient) { }

  getMarkets() {
    return this.http.get('http://localhost:8000/api/markets')
  }

  createMarket(market: any) {
    return this.http.post('http://localhost:8000/api/markets', market);
  }
}
