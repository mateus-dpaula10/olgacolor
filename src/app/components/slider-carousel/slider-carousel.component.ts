import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider-carousel',
  imports: [],
  templateUrl: './slider-carousel.component.html',
  styleUrl: './slider-carousel.component.scss'
})
export class SliderCarouselComponent {
  imgCarouselSlider: any[] = [
    {
      src: 'assets/images/slider-carousel-1.webp',
      title: 'Allard Oscar Freire',
      subtitle: 'Gafisa, Arthur Casas, Alex Allard.'
    },
    {
      src: 'assets/images/slider-carousel-2.webp',
      title: 'Tonino Lamborghini',
      subtitle: 'Gafisa'
    },
    {
      src: 'assets/images/slider-carousel-3.webp',
      title: 'Tom Delfim Moreira',
      subtitle: 'Gafisa e Escritório de Arquitetura californiano Gensler'
    },
    {
      src: 'assets/images/slider-carousel-4.webp',
      title: 'Invert Campo Belo',
      subtitle: 'Gafisa'
    },
    {
      src: 'assets/images/slider-carousel-5.webp'
    },
    {
      src: 'assets/images/slider-carousel-6.webp'
    },
    {
      src: 'assets/images/slider-carousel-7.webp'
    },
    {
      src: 'assets/images/slider-carousel-8.webp'
    },
    {
      src: 'assets/images/slider-carousel-9.webp'
    },
    {
      src: 'assets/images/slider-carousel-10.webp'
    },
    {
      src: 'assets/images/slider-carousel-11.webp'
    },
    {
      src: 'assets/images/slider-carousel-12.webp'
    },
    {
      src: 'assets/images/slider-carousel-13.webp'
    },
    {
      src: 'assets/images/slider-carousel-14.webp'
    },
    {
      src: 'assets/images/slider-carousel-15.webp'
    },
    {
      src: 'assets/images/slider-carousel-16.webp'
    },
    {
      src: 'assets/images/slider-carousel-17.webp'
    }
  ]

  currentIndex = 0
  itemsPerSlide = 1

  constructor() {
    this.updateItems()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateItems()
  }
  
  updateItems() {
    const width = window.innerWidth
    if (width >= 576) {
      this.itemsPerSlide = 2
    } else if (width >= 768) {
      this.itemsPerSlide = 3
    } else if (width >= 992) {
      this.itemsPerSlide = 5
    } else {
      this.itemsPerSlide = 1
    }
  }

  moveSlide(direction: number): void {
    const totalItems = this.imgCarouselSlider.length
    const totalVisibleItems = this.itemsPerSlide
    
    this.currentIndex = (this.currentIndex + direction + totalItems) % totalItems

    const carousel = document.querySelector('.list-carousel') as HTMLElement
    carousel.style.transform = `translateX(-${(this.currentIndex * (100 / totalVisibleItems))}%)`
  }
}
