import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { NewsletterComponent } from "../../../components/newsletter/newsletter.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { MainComponent } from "../../../components/processes-production/extrusion/main/main.component";

@Component({
  selector: 'app-extrusao',
  imports: [HeaderComponent, NewsletterComponent, FooterComponent, MainComponent],
  templateUrl: './extrusao.component.html',
  styleUrl: './extrusao.component.scss'
})
export class ExtrusaoComponent {
  classScrolled: string = 'scrolled position-sticky'
}
