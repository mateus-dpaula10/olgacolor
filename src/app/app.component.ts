import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'olgacolor';

  constructor(private translate: TranslateService, private cdr: ChangeDetectorRef) {
    this.translate.setDefaultLang('pt')

    const browserLang = this.translate.getBrowserLang()
    this.translate.use(browserLang?.match(/pt|en/) ? browserLang : 'pt')
  }

  changeLanguage(language: string) {
    this.translate.use(language)
    this.cdr.detectChanges()
  }
}
