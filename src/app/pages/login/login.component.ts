import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup
  
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })    
  }

  login() {
    const payload = this.form.value

    if (this.form.valid) {  
      this.authService.login(payload.email, payload.password).subscribe(response => {
        if (response.access_token) {
          localStorage.setItem('token', response.access_token)   
          this.router.navigate(['/mercados/adicionar-mercados'])
        }
      })
    } else {
      alert('Preencha todos os campos!')
    }
  }
}
