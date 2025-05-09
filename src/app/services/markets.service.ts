import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class MarketsService {

  private readonly _http = inject(HttpClient);
  private readonly _url = `${environment.apiUrl}/api/markets`;

  getMarkets() {
    return this._http.get(this._url)
  }

  createMarket(market: any) {
    return this._http.post(this._url, market);
  }

  getMarketById(id: number): Observable<any> {
    return this._http.get(`${this._url}/${id}`);
  }

}
