import { Component, inject } from '@angular/core';
import { DividingLineComponent } from "../dividing-line/dividing-line.component";
import { PriceService } from '../../services/price.service';
import { CommonModule } from '@angular/common';
import { ApiResponse } from '../../interfaces/ApiResponse.interface';

@Component({
  selector: 'app-price',
  imports: [DividingLineComponent, CommonModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {
  dynamicWidth: number = 10
  dynamicBg: string = '#000'
  currencies: any[] = []  
  currentMonth: number
  currentYear: number
  
  constructor(
    private priceService: PriceService
  ) {}

  ngOnInit(): void {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()
    this.currentMonth = currentMonth + 1
    this.currentYear = currentYear

    this.priceService.getCurrencies().subscribe({
      next: (res: ApiResponse) => {
        const results = res.results
        const currencies = results.currencies

        const currencyKeys = Object.keys(currencies)

        for (let i = 1; i < 5; i++) {
          const key = currencyKeys[i]
          const currency = currencies[key]
          
          this.currencies.push({
            sigla: key,
            buy: currency.buy,
            name: currency.name,
            code: currency.code,
            variation: currency.variation
          })          
        }
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
