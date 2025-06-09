import { Component, inject, OnInit, signal } from '@angular/core';
import { FinishesService } from '../../../services/finishes.service';

@Component({
  selector: 'finishes-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class FinishesProductsComponent implements OnInit {

  private readonly _finishesService = inject(FinishesService);

  protected colors = signal<any[]>([]);

  ngOnInit(): void {
    // this._finishesService.getCustomPortfolio().subscribe(portfolio => {
    //   console.log(portfolio);
    //   this.colors.set(portfolio);
    // });
    this._finishesService.getPortfolio().subscribe(portfolio => {
      // console.log(portfolio);
      this.colors.set(portfolio);
    });
  }

}
