import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  imports: [TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt');
  }
}
