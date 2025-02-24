import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapsLoaderService } from '../../../services/google-maps-loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsletterService } from '../../../services/newsletter.service';

@Component({
  selector: 'app-main',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    GoogleMapsModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(
    private googleMapsLoader: GoogleMapsLoaderService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private contactService: NewsletterService
  ) {}

  formContact: FormGroup
  isLoading: boolean = false
  zoom = 18
  center1: google.maps.LatLngLiteral = { lat: -23.647526108407344, lng: -46.5791767755274 }
  center2: google.maps.LatLngLiteral = { lat: -22.283778718082978, lng: -46.59374883325154 }

  ngOnInit(): void {
    this.googleMapsLoader.load()
    .then(() => {
      console.log('Google Maps API carregada com sucesso!')
    })
    .catch((error) => {
      console.error('Erro ao carregar Google Maps API', error)
    })

    this.formContact = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      message: ['', Validators.required],
      accept_receive: [false, Validators.required],
      radioDefault: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.formContact.invalid) {
      this.snackbar.open("Preencha todos os campos corretamente!", 'Fechar', { duration: 3000 })
      return
    }

    const payload = this.formContact.value
    payload.accept_receive = payload.accept_receive ? 'Sim' : 'Não'
    const emailBody = `
      Nome: ${payload.name},
      Empresa: ${payload.company},
      E-mail: ${payload.email},
      Telefone: ${payload.telephone},
      Mensagem: ${payload.message},
      Aceita receber mensagens, promoções e informações: ${payload.accept_receive}
      Opção: ${payload.radioDefault}
    `

    this.isLoading = true

    this.contactService.sendEmail('mateus.dpaula10@gmail.com', 'Formulário de contato do site', emailBody).subscribe(
      () => {
        this.snackbar.open("Formulário enviado com sucesso!", 'Fechar', { duration: 3000 })
        this.formContact.reset()
      },
      (error) => {
        console.error("Erro ao enviar formulário!", error.message)
        this.snackbar.open("Erro ao enviar formulário!", 'Fechar', { duration: 3000 });
      },
      () => {
        this.isLoading = false
      }
    )
  }
}
