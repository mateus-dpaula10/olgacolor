import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapsLoaderService } from '../../../services/google-maps-loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsletterService } from '../../../services/newsletter.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-main',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    GoogleMapsModule,
    NgxMaskDirective
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [provideNgxMask()]
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
  // zoom = 18
  // center1: google.maps.LatLngLiteral = { lat: -23.647526108407344, lng: -46.5791767755274 }
  // center2: google.maps.LatLngLiteral = { lat: -22.283778718082978, lng: -46.59374883325154 }
  map1!: google.maps.Map
  map2!: google.maps.Map

  ngOnInit(): void {
    this.formContact = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cellphone: ['', Validators.required],
      message: ['', Validators.required],
      accept_receive: [false, Validators.required],
      radioDefault: ['', Validators.required],
    })
  }

  ngAfterViewInit() {
    this.googleMapsLoader
      .load()
      .then(() => {
        if (window.google && window.google.maps) {
          const map1 = new google.maps.Map(document.getElementById('map1') as HTMLElement, {
            center: { lat: -23.647526108407344, lng: -46.5791767755274 },
            zoom: 18
          })

          const map2 = new google.maps.Map(document.getElementById('map2') as HTMLElement, {
            center: { lat: -22.283778718082978, lng: -46.59374883325154 },
            zoom: 18
          })

          // const marker1 = new google.maps.marker.AdvancedMarkerElement({
          //   map: map1,
          //   position: { lat: -23.647526108407344, lng: -46.5791767755274 },
          // })

          // const marker2 = new google.maps.marker.AdvancedMarkerElement({
          //   map: map2,
          //   position: { lat: -22.283778718082978, lng: -46.59374883325154 },
          // })
        } else {
          console.error('Google Maps API ainda não está disponível.')
        }
      })
      .catch((error) => console.error('Erro ao carregar Google Maps API', error))
  }

  // initializeMap() {
  //   if (!window['google'] || !window['google']) {
  //     console.error('Google Maps API não está disponível.')
  //     return
  //   }
    
  //   const map = new google.maps
  // }

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
      Telefone: ${payload.cellphone},
      Mensagem: ${payload.message},
      Aceita receber mensagens, promoções e informações: ${payload.accept_receive}
      Opção: ${payload.radioDefault}
    `

    this.isLoading = true

    this.contactService.sendEmail('marketing@olgacolor.com.br', 'Formulário de contato do site', emailBody).subscribe(
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
