import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-newsletter',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {
  private fb = inject(FormBuilder)
  private newsletterService = inject(NewsletterService)
  private snackbar = inject(MatSnackBar)
  
  newsletterForm: FormGroup
  isLoading: boolean = false

  ngOnInit(): void {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  sendEmail() {
    if (this.newsletterForm.invalid) {
      alert('Preecha o e-mail corretamente!')
      return
    }

    const email = this.newsletterForm.value.email
    const emailBody = `
      Olá ${email},

      Você cadastrou seu e-mail em nosso site para ficar por dentro das novidades!

      Equipe
      Olgacolor Alumínio
    `

    this.isLoading = true
    
    this.newsletterService
      .sendEmail(email, 'Newsletter site!', emailBody).subscribe(
        () => {
          this.snackbar.open("Notificação enviada por e-mail com sucesso!!", 'Fechar', { duration: 3000 })
          this.newsletterForm.reset()
        },
        (error) => {
          console.error("Erro ao enviar e-mail: " + error.message)
          this.snackbar.open("Erro ao enviar e-mail!", 'Fechar', { duration: 3000 })
        },
        () => {
          this.isLoading = false
        }
      ) 
  }
}
