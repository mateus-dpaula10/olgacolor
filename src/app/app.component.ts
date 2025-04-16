import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'olgacolor';

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    })
  }
}
