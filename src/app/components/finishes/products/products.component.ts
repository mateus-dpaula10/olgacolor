import { Component, inject, OnInit, signal, OnDestroy } from '@angular/core';
import { FinishesService } from '../../../services/finishes.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, of, take, debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'finishes-products',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class FinishesProductsComponent implements OnInit, OnDestroy {

  private readonly _finishesService = inject(FinishesService);
  private readonly destroy$ = new Subject<void>();

  protected searchControl = new FormControl('');
  protected colors = signal<any[]>([]);
  protected isLoading = signal<boolean>(false);
  protected totalItems = signal<number>(0);
  protected pageSize = 12;
  protected currentPage = 0;

  ngOnInit(): void {
    this.setupSearchSubscription();
    this.loadTotalItems();
    this.loadData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupSearchSubscription(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(searchTerm => {
      this.currentPage = 0; // Reset para primeira página
      this.loadTotalItems(searchTerm || '');
      this.loadData(searchTerm || '');
    });
  }

  private loadTotalItems(searchTerm: string = ''): void {
    this._finishesService.getPortfolioCount(searchTerm).pipe(take(1))
      .subscribe((count) => this.totalItems.set(count));
  }

  private loadData(searchTerm: string = ''): void {
    this.isLoading.set(true);
    const params = {
      pageSize: this.pageSize,
      page: this.currentPage,
      search: searchTerm
    };

    this._finishesService.getPortfolio(params).pipe(
      take(1),
      catchError(_ => {
        this.isLoading.set(false);
        return of([]);
      })
    ).subscribe((items) => {
      this.colors.set(items);
      this.isLoading.set(false);
    });
  }

  protected onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData(this.searchControl.value || '');
  }

  protected setProduct(product: any): void {
    this._finishesService.selectedProduct.set(product);
  }

}
