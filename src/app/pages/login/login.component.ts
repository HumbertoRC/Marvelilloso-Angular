import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  onLogin(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === this.email && u.password === this.password);

    if (!user) {
      this.errorMessage = 'Correo o contraseña incorrectos.';
      this.successMessage = '';
      return;
    }

    this.errorMessage = '';
    this.successMessage = 'Inicio de sesión exitoso.';
    this.router.navigate(['/dashboard']);
  }
}
