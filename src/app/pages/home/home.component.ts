import { Component } from '@angular/core';
import { VisionComponent } from "../../components/vision/vision.component";
import { MarketsComponent } from "../../components/markets/markets.component";

@Component({
  selector: 'app-home',
  imports: [VisionComponent, MarketsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
