import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DividingLineComponent } from "../../dividing-line/dividing-line.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-vision',
  imports: [DividingLineComponent],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent {
  dynamicWidth: number = 10
  dynamicBg: string = '#FFF'
  video: HTMLVideoElement | null = null

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.video = document.getElementById('myVideo') as HTMLVideoElement
      if (this.video) {
        this.video.play().catch((err: any) => console.error('Erro ao reproduzir vídeo:', err))
      }
    }
  }
}
