import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component"; 
import { MainComponent } from '../../../components/markets/categories/main/main.component';
import { NewsletterComponent } from '../../../components/newsletter/newsletter.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-categories',
  imports: [HeaderComponent, MainComponent, NewsletterComponent, FooterComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  classScrolled: string = 'scrolled position-sticky'
}
