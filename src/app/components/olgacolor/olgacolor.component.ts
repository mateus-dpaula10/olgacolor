import { Component } from '@angular/core';
import { DividingLineComponent } from "../dividing-line/dividing-line.component";

@Component({
  selector: 'app-olgacolor',
  imports: [DividingLineComponent],
  templateUrl: './olgacolor.component.html',
  styleUrl: './olgacolor.component.scss'
})
export class OlgacolorComponent {
  dynamicWidth: number = 10
  dynamicBg: string = '#FFF'
}
