import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() customClass: string = ''
  isDropdownOpen: boolean = false
  constructor(
    private router: Router, 
    private translate: TranslateService, 
    private cdr: ChangeDetectorRef,
    private authService: AuthService
  ) {}

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

  changeLanguage(language: string) {
    this.translate.use(language)
    this.cdr.detectChanges()
    this.isDropdownOpen = false
  }

  openDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
