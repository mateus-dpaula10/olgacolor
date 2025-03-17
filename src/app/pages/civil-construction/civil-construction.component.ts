import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MainComponent } from "../../../app/components/civil-construction/main/main.component";
import { NewsletterComponent } from "../../components/newsletter/newsletter.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-civil-construction',
  imports: [HeaderComponent, MainComponent, NewsletterComponent, FooterComponent],
  templateUrl: './civil-construction.component.html',
  styleUrl: './civil-construction.component.scss'
})
export class CivilConstructionComponent {
  classScrolled: string = 'scrolled position-sticky'
}
