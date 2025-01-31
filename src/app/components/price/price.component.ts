import { Component } from '@angular/core';
import { DividingLineComponent } from "../dividing-line/dividing-line.component";

@Component({
  selector: 'app-price',
  imports: [DividingLineComponent],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {
  dynamicWidth: number = 10
  dynamicBg: string = '#000'
}
