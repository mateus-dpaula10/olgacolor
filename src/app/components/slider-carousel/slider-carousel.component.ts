import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.updateItems()
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateItems()
  }
  
  updateItems() {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth
      if (width >= 576 && width < 768) {
        this.itemsPerSlide = 2
      } else if (width >= 768 && width < 992) {
        this.itemsPerSlide = 3
      } else if (width >= 992) {
        this.itemsPerSlide = 5
      } else {
        this.itemsPerSlide = 1
      }
    }
  }

  moveSlide(direction: number): void {  
    if (direction > 0) {
      this.currentIndex += this.itemsPerSlide
      if (this.currentIndex >= this.imgCarouselSlider.length) {
        this.currentIndex = 0
      }
    } else {
      this.currentIndex -= this.itemsPerSlide
      if (this.currentIndex < 0) {
        this.currentIndex = this.imgCarouselSlider.length - this.itemsPerSlide
      }
    }
  
    const translateXPercentage = (this.currentIndex / this.itemsPerSlide) * 100
    
    const carousel = document.querySelector('.list-carousel') as HTMLElement
    carousel.style.transform = `translateX(-${translateXPercentage}%)`
  }
}
