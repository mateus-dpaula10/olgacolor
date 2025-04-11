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
      name: [''],
      description: [''],
      air_permeability: [''],
      water_tightness: [''],
      wind_resistance: [''],
      acoustic_insulation: [''],
      thermal_transmittance: [''],
      glazing_thickness: [''],
      width: [''],
      height: [''],
      weight: [''],
      theoretical_thickness: ['']
    })
  }

  createMarket() {
    const formData = new FormData()

    Object.keys(this.form.value).forEach(key => {
      formData.append(key, this.form.value[key])
    })

    this.selectedFiles.forEach(file => {
      formData.append('images[]', file)
    })

    this.marketsService.createMarket(formData).subscribe((res: any) => {
      this.snackBar.open('Produto criado com sucesso', 'Fechar', {
        duration: 3000
      })
      this.form.reset()
    })
  }

  selectedFiles: File[] = []

  onFilesSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files)
  }
}
