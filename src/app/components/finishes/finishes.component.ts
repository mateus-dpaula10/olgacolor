import { Component } from '@angular/core';
import { DividingLineComponent } from "../dividing-line/dividing-line.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finishes',
  imports: [DividingLineComponent, CommonModule],
  templateUrl: './finishes.component.html',
  styleUrl: './finishes.component.scss'
})
export class FinishesComponent {
  dynamicWidth: number = 100
  dynamicBg: string = 'transparent'

  show1: boolean = false

  finishes: any[] = [
    {
      title: 'ANODIZAÇÃO',
      content: 'Proteção eletroquímica que garante durabilidade, resistência e um acabamento sofisticado.',
      img: 'assets/images/finishes_first.avif',
      show: false
    },
    {
      title: 'PINTURA ELETROSTÁTICA A PÓ',
      content: 'Tecnologia de alta performance para um acabamento uniforme, resistente e de longa duração.',
      img: 'assets/images/finishes_second.avif',
      show: false
    },
    {
      title: 'EFEITO MADEIRA',
      content: 'A estética natural da madeira aliada à durabilidade do metal, criando harmonia entre design e resistência.',
      img: 'assets/images/finishes_third.avif',
      show: false
    }
  ]

  changeOpacity(index: number): void {
    this.finishes[index].show = !this.finishes[index].show
  }
}
