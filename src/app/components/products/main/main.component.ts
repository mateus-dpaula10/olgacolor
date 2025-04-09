import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  products: any[] = []
  productsFiltered: any[] = []
  productSelected: any = null
  searchTerm: string = ''
  categories: any[] = []

  constructor(
    private productsService: ProductsService,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('produtos')) {
          if (this.router.url === this.router.url) {
            this.onCategorySelect(this.route.snapshot.queryParams['category'])
          }
        }
      }
    }))

    this.productsService.getProducts().subscribe((products: any) => {
      this.products = products  
      this.productsFiltered = products

      const mainCategorySet = new Set<string>()

      products.forEach((product: any) => {
        const paths = product.category.split(/,|>/)
        const mainCategory = paths[0].toUpperCase().trim()

        if (!mainCategorySet.has(mainCategory)) {
          mainCategorySet.add(mainCategory)
          this.categories.push({
            mainCategory
          })
        }
      })
    })
  } 
  
  toCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }

  onSearch() {
    this.productsFiltered = this.products.filter((product: any) => product.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }

  onCategorySelect(category: string) {
    this.productSelected = null
    this.productsFiltered = this.products.filter((product: any) => product.category.toLowerCase().includes(category.toLowerCase()))
    this.router.navigate(['/produtos'], { queryParams: { category: category.toUpperCase() } })
  }

  onProductClick(product: any) {
    this.productSelected = product

    if (window.innerWidth < 992) {
      const element = document.getElementsByClassName('product-details')[0] as HTMLElement
      window.scrollTo({
        top: element.offsetTop + 100,  
        behavior: 'smooth'
      })
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
