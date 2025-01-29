import { Component } from '@angular/core';
import { DividingLineComponent } from "../dividing-line/dividing-line.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [DividingLineComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  dynamicWidth: number = 10
  dynamicBg: string = '#000'
}
