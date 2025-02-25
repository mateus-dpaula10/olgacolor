import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AluminumService {
  private apiUrl = 'https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL,GBP,EUR/EUR'
  private apiKey = 'dfce32c86dmshcd42559422c3b16p10c5a9jsn1289765128b3'
  // private apiUrl = 'https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL,GBP,EUR/dfce32c86dmshcd42559422c3b16p10c5a9jsn1289765128b3/EUR'

  constructor(private http: HttpClient) { }

  getAluminum(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey, 
      'X-RapidAPI-Host': 'live-metal-prices.p.rapidapi.com'
    })

    return this.http.get<any>(this.apiUrl, { headers })
  }
}
