import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MainComponent } from '../../components/finishes/main/main.component';
import { NewsletterComponent } from "../../components/newsletter/newsletter.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-finishes',
  imports: [HeaderComponent, MainComponent, NewsletterComponent, FooterComponent],
  templateUrl: './finishes.component.html',
  styleUrl: './finishes.component.scss'
})
export class FinishesComponent {
  classScrolled: string = 'scrolled position-sticky'
}
