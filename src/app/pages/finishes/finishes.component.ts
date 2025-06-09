import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { NewsletterComponent } from "../../components/newsletter/newsletter.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-finishes',
  imports: [
    HeaderComponent,
    RouterOutlet,
    NewsletterComponent,
    FooterComponent
  ],
  templateUrl: './finishes.component.html',
  styleUrl: './finishes.component.scss'
})
export class FinishesComponent {
  classScrolled: string = 'scrolled position-sticky'
}
