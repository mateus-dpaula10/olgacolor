import { Component, inject, OnInit, signal } from '@angular/core';
import { FinishesService } from '../../../services/finishes.service';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'finishes-products',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class FinishesProductsComponent implements OnInit {
  private readonly _finishesService = inject(FinishesService);

  protected colors = signal<any[]>([]);
  protected isLoading = signal<boolean>(false);
  protected totalItems = signal<number>(0);
  protected pageSize = 12;
  protected currentPage = 0;

  ngOnInit(): void {
    this.loadTotalItems();
    this.loadData();
  }

  private loadTotalItems(): void {
    this._finishesService.getPortfolioCount().subscribe({
      next: (count) => {
        this.totalItems.set(count);
      },
      error: (error) => {
        console.error('Error loading total items:', error);
      }
    });
  }

  private loadData(): void {
    this.isLoading.set(true);
    this._finishesService.getPortfolio({
      pageSize: this.pageSize,
      page: this.currentPage
    }).subscribe({
      next: (items) => {
        this.colors.set(items);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error loading data:', error);
        this.isLoading.set(false);
      }
    });
  }

  protected onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
