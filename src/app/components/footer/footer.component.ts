import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {  
  currentYear = new Date().getFullYear()

  constructor(private router: Router) {}

  onPerfilClick(category: string) {
    this.router.navigate(['/produtos'], { queryParams: { category: category.toUpperCase() } })
  }
}
