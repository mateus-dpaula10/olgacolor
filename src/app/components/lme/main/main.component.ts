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
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [{ data: [], label: 'Variação Diária', borderColor: 'blue', backgroundColor: 'rgba(0, 0, 255, 0.2)' }]
  }
  public lineChartOptions: ChartConfiguration<'line'>['options'] = { responsive: true }
  public lineChartType: ChartType = 'line'

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

  ngOnInit(): void {
    this.aluminumService.getAluminum().subscribe(data => {
      const variations = this.calculateVariations(data)
      this.updateChart(variations.dailyChange)
    })
  }

  calculateVariations(data: any[]): any {
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
    this.lineChartData.labels = variations.map((v: any) => v.date)
    this.lineChartData.datasets[0].data = variations.map((v: any) => v.change)
  }
}
