import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dividing-line',
  imports: [],
  templateUrl: './dividing-line.component.html',
  styleUrl: './dividing-line.component.scss'
})
export class DividingLineComponent {
  @Input() width: number 
  @Input() bg: string 
}
