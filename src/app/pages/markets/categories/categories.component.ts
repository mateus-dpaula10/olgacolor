import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component"; 
import { NewsletterComponent } from '../../../components/newsletter/newsletter.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MarketsService } from '../../../services/markets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [HeaderComponent, NewsletterComponent, FooterComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  classScrolled: string = 'scrolled position-sticky'

  constructor(
    private marketsService: MarketsService,
    private router: Router
  ) {}

  products: any = []
  categories: any[] = []
  imgCategory: any[] = []

  ngOnInit(): void {
    this.marketsService.getMarkets().subscribe(res => {
      this.products = res

      this.categories = [...new Set(this.products.map((p: any) => p.category))]

      this.imgCategory = this.categories.map((cat: string) => {
        const productsCategory = this.products.filter((p: any) => p.category === cat)
        const firstProduct = productsCategory[0]

        return {
          category: cat,
          image: firstProduct.images[0].path,
          product: productsCategory
        }
      })
    })
  }

  onCategoryClick(category: string) {
    this.router.navigate(['/mercados/categorias/produtos'], { queryParams: { category: category.toUpperCase() } })
  }

  // categories: any = [
  //   {
  //     name: "Sistemas",
  //     manufactured_by: [
  //       {
  //         name: "Teste",
  //         image: "assets/images/profiles/anodizing.jpg"
  //       }
  //     ],
  //     items: [
  //       {
  //         name: "Sistema1",
  //         image: "assets/images/catalogs/cup_holder.webp"
  //       },
  //       {
  //         name: "Sistema2",
  //         image: "assets/images/catalogs/doors_windows.jpg"
  //       },
  //       {
  //         name: "Sistema3",
  //         image: "assets/images/catalogs/cup_holder.webp"
  //       }
  //     ]
  //   },
  //   {
  //     name: "Produtos para o profissional",
  //     manufactured_by: [
  //       {
  //         name: "Teste",
  //         image: "assets/images/profiles/anodizing.jpg"
  //       }
  //     ],
  //     items: [
  //       {
  //         name: "Produto1",
  //         image: "assets/images/catalogs/cup_holder.webp"
  //       }
  //     ]
  //   }
  // ]
}
