import { Component } from '@angular/core';
import { VisionComponent } from "../../components/vision/vision.component";
import { MarketsComponent } from "../../components/markets/markets.component";
import { ProductsComponent } from "../../components/products/products.component";
import { OlgacolorComponent } from "../../components/olgacolor/olgacolor.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SliderCarouselComponent } from "../../components/slider-carousel/slider-carousel.component";
import { FinishesComponent } from "../../components/finishes/finishes.component";
import { ResponsibilityComponent } from "../../components/responsibility/responsibility.component";
import { BudgetComponent } from "../../components/budget/budget.component";
import { PriceComponent } from "../../components/price/price.component";

@Component({
  selector: 'app-home',
  imports: [VisionComponent, MarketsComponent, ProductsComponent, OlgacolorComponent, FooterComponent, SliderCarouselComponent, FinishesComponent, ResponsibilityComponent, BudgetComponent, PriceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
