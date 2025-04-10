import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  categories: any = [
    {
      name: "Sistemas",
      manufactured_by: [
        {
          name: "Teste",
          image: "assets/images/profiles/anodizing.jpg"
        }
      ],
      items: [
        {
          name: "Sistema1",
          image: "assets/images/catalogs/cup_holder.webp"
        },
        {
          name: "Sistema2",
          image: "assets/images/catalogs/doors_windows.jpg"
        },
        {
          name: "Sistema3",
          image: "assets/images/catalogs/cup_holder.webp"
        }
      ]
    },
    {
      name: "Produtos para o profissional",
      manufactured_by: [
        {
          name: "Teste",
          image: "assets/images/profiles/anodizing.jpg"
        }
      ],
      items: [
        {
          name: "Produto1",
          image: "assets/images/catalogs/cup_holder.webp"
        }
      ]
    }
  ]

  ngOnInit(): void {

  }
}
