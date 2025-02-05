import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {
  private fb = inject(FormBuilder)
  private newsletterService = inject(NewsletterService)
  
  newsletterForm: FormGroup

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
    
    this.newsletterService
      .sendEmail(email, 'Newsletter site!', emailBody).subscribe(
        () => {
          alert("Notificação enviada por e-mail com sucesso!"),
          this.newsletterForm.reset()
        },
        (error) => console.log("Erro ao enviar e-mail: " + error.message)
      )
  }
}
