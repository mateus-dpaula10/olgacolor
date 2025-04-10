import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { NewsletterComponent } from "../../../components/newsletter/newsletter.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MarketsService } from '../../../services/markets.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-markets',
  imports: [HeaderComponent, NewsletterComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './add-markets.component.html',
  styleUrl: './add-markets.component.scss'
})
export class AddMarketsComponent {
  classScrolled: string = 'scrolled position-sticky'

  form: FormGroup

  constructor(private fb: FormBuilder, private marketsService: MarketsService, private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      air_permeability: ['', Validators.required],
      water_tightness: ['', Validators.required],
      wind_resistance: ['', Validators.required],
      acoustic_insulation: ['', Validators.required],
      thermal_transmittance: ['', Validators.required],
      glazing_thickness: ['', Validators.required],
      width: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      theoretical_thickness: ['', Validators.required],
    })
  }

  createMarket() {
    const payload = this.form.value

    this.marketsService.createMarket(payload).subscribe((res: any) => {
      this.snackBar.open('Produto criado com sucesso', 'Fechar', {
        duration: 3000
      })
      this.form.reset()
    })
  }
}
