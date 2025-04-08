import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { FormsModule } from '@angular/forms';

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
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
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
    this.productsFiltered = this.products.filter((product: any) => product.category.toLowerCase().includes(category.toLowerCase()))
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
