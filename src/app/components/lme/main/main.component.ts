import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { AluminumService } from '../../../services/aluminum.service';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { RateDataInterface } from '../../../interfaces/rate-data.interface';

type MetalType = "COP" | "ZN" | "AL" | "PB" | "SN" | "NI" | "USD";

@Component({
  selector: 'app-main',
  imports: [
    MatTabsModule,
    MatSelectModule,
    BaseChartDirective,
    CommonModule
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

  months: string[] = [
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
  selectedDays: any[] = []

  metals: string[] = [
    'Cobre',
    'Zinco',
    'Alumínio',
    'Chumbo',
    'Estanho',
    'Níquel',
    'Dólar'
  ]
  metalMapping: Record<string, MetalType> = {
    'Cobre': 'COP',
    'Zinco': 'ZN',
    'Alumínio': 'AL',
    'Chumbo': 'PB',
    'Estanho': 'SN',
    'Níquel': 'NI',
    'Dólar': 'USD'
  }
  selectedMetal = 'Cobre'

  dailyPrices: { date: string, price: number }[] = []
  weeklyAverages: { week: string, avgPrice: number }[] = []

  ngOnInit(): void {
    this.fetchMetalData()
  }

  fetchMetalData(): void {
    const metalKey = this.metalMapping[this.selectedMetal]
    const selectedMetalData = this.aluminumService.getRates().map((item: RateDataInterface) => ({
      date: item.date,
      price: item.rates[metalKey]
    }))
    if (selectedMetalData.length > 0) {
      this.dailyPrices = selectedMetalData
      this.calculateWeeklyAverages()      
      const variations = this.calculateVariations(this.dailyPrices)      
      this.updateChart(variations)
    } else {
      console.error(`Preço para ${this.selectedMetal} não encontrado na resposta da API`)
    }
  }

  calculateWeeklyAverages(): void {
    const groupedByWeek: Record<string, number[]> = {}
    this.dailyPrices.forEach(({ date, price }) => {
      const week = this.getWeekFromDate(date)
      if (!groupedByWeek[week]) groupedByWeek[week] = []
      groupedByWeek[week].push(price)
    })

    this.weeklyAverages = Object.keys(groupedByWeek).map(week => ({
      week,
      avgPrice: groupedByWeek[week].reduce((a, b) => a + b, 0) / groupedByWeek[week].length
    }))
  }

  getWeekFromDate(date: string): string {
    const d = new Date(date)
    const week = Math.ceil(d.getDate() / 7)
    return `Semana ${week}/${d.getMonth() + 1}`
  }

  calculateVariations(data: any[]): any {
    const sortedData = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    const dailyChange = sortedData.map((item, index, arr) => ({
      date: item.date,
      change: index > 0 ? item.price - arr[index - 1].price : 0
    }))

    return { dailyChange }
  }

  updateChart(variations: any): void {
    this.lineChartData = {
      labels: variations.dailyChange.map((v: any) => v.date),
      datasets: [
        {
          data: variations.dailyChange.map((v: any) => v.change),
          label: 'Variação Diária',
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.2)',
          fill: true
        }
      ]
    }
  }

  onMonthChange(): void {
    this.selectedDays = this.filterDataByMonth(this.selectedMonth)
  }

  filterDataByMonth(month: string): any[] {
    const monthMapping: Record<string, number> = {
      'Jan/25': 0,
      'Fev/25': 1,
      'Mar/25': 2,
      'Abr/25': 3,
      'Mai/25': 4,
      'Jun/25': 5,
      'Jul/25': 6,
      'Ago/25': 7,
      'Set/25': 8,
      'Out/25': 9,
      'Nov/25': 10,
      'Dez/25': 11,
    }    

    const monthIndex = monthMapping[month]
    const metalKey = this.metalMapping[this.selectedMetal]

    return this.aluminumService.getRates().filter((rate) => {
      const date = new Date(rate.date)
      return date.getMonth() === monthIndex
    }).map(rate => {
      return {
        date: rate.date,
        price: rate.rates[metalKey]
      }
    })
  }

  onTabChange(index: number): void {
    this.selectedMetal = this.metals[index]
    this.fetchMetalData()
  }
}
