import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { NewsletterComponent } from "../../../components/newsletter/newsletter.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { MarketsService } from '../../../services/markets.service';

@Component({
  selector: 'app-all-markets',
  imports: [HeaderComponent, NewsletterComponent, FooterComponent],
  templateUrl: './all-markets.component.html',
  styleUrl: './all-markets.component.scss'
})
export class AllMarketsComponent {
  constructor(
    private marketsService: MarketsService
  ) {}

  allMarkets: any = []

  ngOnInit(): void {
    this.marketsService.getMarkets().subscribe(res => {
      this.allMarkets = res
    })
  }

  classScrolled: string = 'scrolled position-sticky'
}
