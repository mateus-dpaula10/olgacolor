import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { AluminumService } from '../../../services/aluminum.service';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-main',
  imports: [
    MatTabsModule,
    MatSelectModule,
    BaseChartDirective
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  private aluminumService = inject(AluminumService)
  public lineChartData: any = {
    labels: [],
    datasets: [
      { 
        data: [], 
        label: 'Variação Diária', 
        borderColor: 'blue', 
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        fill: true
      }
    ]
  }
  public lineChartOptions: ChartOptions = { responsive: true }

  months: any[] = [
    'Jan/25',
    'Fev/25',
    'Mar/25',
    'Abr/25',
    'Mai/25',
    'Jun/25',
    'Jul/25',
    'Ago/25',
    'Set/25',
    'Out/25',
    'Nov/25',
    'Dez/25',
  ]
  selectedMonth = 'Fev/25'

  metals: any[] = [
    'European Euro',
    'Gold',
    'Silver',
    'Dólar'
  ]
  metalMapping: Record<string, string> = {
    'European Euro': 'EUR',
    'Gold': 'XAU',
    'Silver': 'XAG',
    'Dólar': 'USD'
  }
  selectedMetal = 'European Euro'

  ngOnInit(): void {
    this.fetchMetalData()
  }

  fetchMetalData(): void {
    this.aluminumService.getAluminum().subscribe(data => {
      const metalKey = this.metalMapping[this.selectedMetal]
      let metalPrice: number | undefined
      metalPrice = data.rates?.[metalKey]

      if (metalPrice !== undefined) {
        const historicalPrice = [
          { date: '2025-02-20T00:00:00Z', price: metalPrice - 0.1 },
          { date: '2025-02-21T00:00:00Z', price: metalPrice - 0.05 },
          { date: new Date().toISOString(), price: metalPrice }
        ]
        
        const variations = this.calculateVariations(historicalPrice)

        this.updateChart(variations)
      } else {
        console.error(`Preço para ${this.selectedMetal} não encontrado na resposta da API`)
      }
    })
  }

  calculateVariations(data: any[]): any {
    if (!Array.isArray(data) || data.length === 0) {
      return { dailyChange: [], weeklyChange: [], monthlyChange: [] }
    }

    const sortedData = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    const dailyChange = sortedData.map((item, index, arr) => ({
      date: item.date,
      change: index > 0 ? item.price - arr[index - 1].price : 0
    }))

    const weeklyChange = sortedData.filter((_, index) => index % 7 === 0).map((item, index, arr) => ({
      date: item.date,
      change: index > 0 ? item.price - arr[index - 1].price : 0
    }))

    const monthlyChange = sortedData.filter((_, index) => index % 30 === 0).map((item, index, arr) => ({
      date: item.date,
      change: index > 0 ? item.price - arr[index - 1].price : 0
    }))

    return { dailyChange, weeklyChange, monthlyChange }
  }

  updateChart(variations: any) {
    this.lineChartData = {
      labels: variations.dailyChange.map((v: any) => v.date),
      datasets: [
        {
          data: variations.dailyChange.map((v: any) => v.change),
          label: 'Variação Diária',
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.2)',
          fill: true
        },
        {
          data: variations.weeklyChange.map((v: any) => v.change),
          label: 'Variação Semanal',
          borderColor: 'green',
          backgroundColor: 'rgba(0, 255, 0, 0.2)',
          fill: true
        },
        {
          data: variations.monthlyChange.map((v: any) => v.change),
          label: 'Variação Mensal',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          fill: true
        }
      ]
    }
  }

  onMonthChange(): void {
    this.fetchMetalData()
  }

  onTabChange(index: number): void {
    this.selectedMetal = this.metals[index]
    this.fetchMetalData()
  }
}
