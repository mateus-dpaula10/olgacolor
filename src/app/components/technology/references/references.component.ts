import { Component } from '@angular/core';
import { DividingLineComponent } from "../../dividing-line/dividing-line.component";

@Component({
  selector: 'app-references',
  imports: [DividingLineComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  dynamicWidth: number = 10
  dynamicBg: string = '#000'
}
