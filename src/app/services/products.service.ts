import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  private readonly _http = inject(HttpClient);
  private readonly _url = `${environment.apiUrl}/api`;

  getProducts() {
    return this._http.get(`${this._url}/products`);
  }

}
