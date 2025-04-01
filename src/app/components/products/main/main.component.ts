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
  categories: string[] = []
  subCategories: string[] = []
  searchTerm: string = ''

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: any) => {
      this.products = products  
      this.productsFiltered = products

      products.forEach((product: any) => {
        const categoryParts = product.category.split(/,|>/).map((c: string) => c.trim())

        if (categoryParts.length === 0) return

        this.categories.push(categoryParts[0])
        this.categories = [...new Set(this.categories)].map((c: string) => c.toUpperCase())

        this.subCategories.push(categoryParts.slice(1))
        this.subCategories = [...new Set(this.subCategories)]
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
