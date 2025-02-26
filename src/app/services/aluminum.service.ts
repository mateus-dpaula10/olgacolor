import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RateDataInterface } from '../interfaces/rate-data.interface';

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

  private ratesData = [    
    {
      "date": "2025-02-01",
      "rates": {
        "COP": 3.00,  
        "ZN": 2.80,   
        "AL": 2.10,   
        "PB": 2.50,   
        "SN": 3.60,   
        "NI": 6.80,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-02",
      "rates": {
        "COP": 3.10,
        "ZN": 2.85,
        "AL": 2.15,
        "PB": 2.55,
        "SN": 3.65,
        "NI": 6.90,
        "USD": 1.05
      }
    },
    {
      "date": "2025-02-03",
      "rates": {
        "COP": 3.05,
        "ZN": 2.75,
        "AL": 2.05,
        "PB": 2.45,
        "SN": 3.55,
        "NI": 6.70,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-04",
      "rates": {
        "COP": 3.07,
        "ZN": 2.78,
        "AL": 2.08,
        "PB": 2.47,
        "SN": 3.58,
        "NI": 6.75,
        "USD": 1.05
      }
    },
    {
      "date": "2025-02-05",
      "rates": {
        "COP": 3.08,
        "ZN": 2.80,
        "AL": 2.12,
        "PB": 2.50,
        "SN": 3.60,
        "NI": 6.80,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-06",
      "rates": {
        "COP": 3.12,
        "ZN": 2.83,
        "AL": 2.14,
        "PB": 2.52,
        "SN": 3.63,
        "NI": 6.85,
        "USD": 1.05
      }
    },
    {
      "date": "2025-02-07",
      "rates": {
        "COP": 3.15,
        "ZN": 2.86,
        "AL": 2.17,
        "PB": 2.54,
        "SN": 3.65,
        "NI": 6.90,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-08",
      "rates": {
        "COP": 3.20,
        "ZN": 2.88,
        "AL": 2.19,
        "PB": 2.57,
        "SN": 3.68,
        "NI": 6.95,
        "USD": 1.05
      }
    },
    {
      "date": "2025-02-09",
      "rates": {
        "COP": 3.12,
        "ZN": 2.85,
        "AL": 2.11,
        "PB": 2.51,
        "SN": 3.60,
        "NI": 6.80,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-10",
      "rates": {
        "COP": 3.10,
        "ZN": 2.83,
        "AL": 2.09,
        "PB": 2.49,
        "SN": 3.58,
        "NI": 6.78,
        "USD": 1.05
      }
    },
    {
      "date": "2025-02-11",
      "rates": {
        "COP": 3.08,
        "ZN": 2.81,
        "AL": 2.07,
        "PB": 2.47,
        "SN": 3.56,
        "NI": 6.75,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-12",
      "rates": {
        "COP": 3.07,
        "ZN": 2.80,
        "AL": 2.06,
        "PB": 2.46,
        "SN": 3.54,
        "NI": 6.72,
        "USD": 1.10
      }
    },
    {
      "date": "2025-02-13",
      "rates": {
        "COP": 3.06,
        "ZN": 2.79,
        "AL": 2.05,
        "PB": 2.45,
        "SN": 3.53,
        "NI": 6.70,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-14",
      "rates": {
        "COP": 3.10,
        "ZN": 2.83,
        "AL": 2.08,
        "PB": 2.48,
        "SN": 3.55,
        "NI": 6.73,
        "USD": 1.10
      }
    },
    {
      "date": "2025-02-15",
      "rates": {
        "COP": 3.12,
        "ZN": 2.85,
        "AL": 2.10,
        "PB": 2.50,
        "SN": 3.57,
        "NI": 6.75,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-16",
      "rates": {
        "COP": 3.14,
        "ZN": 2.87,
        "AL": 2.12,
        "PB": 2.52,
        "SN": 3.59,
        "NI": 6.78,
        "USD": 1.10
      }
    },
    {
      "date": "2025-02-17",
      "rates": {
        "COP": 3.00,  
        "ZN": 2.80,   
        "AL": 2.10,   
        "PB": 2.50,   
        "SN": 3.60,   
        "NI": 6.80,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-18",
      "rates": {
        "COP": 3.10,
        "ZN": 2.85,
        "AL": 2.15,
        "PB": 2.55,
        "SN": 3.65,
        "NI": 6.90,
        "USD": 1.10
      }
    },
    {
      "date": "2025-02-19",
      "rates": {
        "COP": 3.05,
        "ZN": 2.75,
        "AL": 2.05,
        "PB": 2.45,
        "SN": 3.55,
        "NI": 6.70,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-20",
      "rates": {
        "COP": 3.07,
        "ZN": 2.78,
        "AL": 2.08,
        "PB": 2.47,
        "SN": 3.58,
        "NI": 6.75,
        "USD": 1.10
      }
    },
    {
      "date": "2025-02-21",
      "rates": {
        "COP": 3.08,
        "ZN": 2.80,
        "AL": 2.12,
        "PB": 2.50,
        "SN": 3.60,
        "NI": 6.80,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-22",
      "rates": {
        "COP": 3.12,
        "ZN": 2.83,
        "AL": 2.14,
        "PB": 2.52,
        "SN": 3.63,
        "NI": 6.85,
        "USD": 1.05
      }
    },
    {
      "date": "2025-02-23",
      "rates": {
        "COP": 3.15,
        "ZN": 2.86,
        "AL": 2.17,
        "PB": 2.54,
        "SN": 3.65,
        "NI": 6.90,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-24",
      "rates": {
        "COP": 3.20,
        "ZN": 2.88,
        "AL": 2.19,
        "PB": 2.57,
        "SN": 3.68,
        "NI": 6.95,
        "USD": 1.05
      }
    },
    {
      "date": "2025-02-25",
      "rates": {
        "COP": 3.12,
        "ZN": 2.85,
        "AL": 2.11,
        "PB": 2.51,
        "SN": 3.60,
        "NI": 6.80,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-26",
      "rates": {
        "COP": 3.10,
        "ZN": 2.83,
        "AL": 2.09,
        "PB": 2.49,
        "SN": 3.58,
        "NI": 6.78,
        "USD": 1.05
      }
    },
    {
      "date": "2025-02-27",
      "rates": {
        "COP": 3.08,
        "ZN": 2.81,
        "AL": 2.07,
        "PB": 2.47,
        "SN": 3.56,
        "NI": 6.75,
        "USD": 1.00
      }
    },
    {
      "date": "2025-02-28",
      "rates": {
        "COP": 3.08,
        "ZN": 2.80,
        "AL": 2.12,
        "PB": 2.50,
        "SN": 3.60,
        "NI": 6.80,
        "USD": 1.05
      }
    }
  ]

  getRates(): RateDataInterface[] {
    return this.ratesData
  }
}