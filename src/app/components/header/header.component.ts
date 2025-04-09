import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() customClass: string = ''

  constructor(private router: Router) {}

  headerClass: string = ''

  ngOnInit(): void {
    this.headerClass = this.customClass ? this.customClass : ''
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.scrollY > 50 && !this.customClass) {
      this.headerClass = 'scrolled'
    } else {
      this.headerClass = this.customClass || ''
    }
  }

  onPerfilClick(category: string) {
    this.router.navigate(['/produtos'], { queryParams: { category: category.toUpperCase() } })
  }
}
