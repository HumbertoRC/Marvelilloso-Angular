import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  onRegister(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Completa todos los campos.';
      return;
    }

    // Guardar usuario en localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((u: any) => u.email === this.email);

    if (userExists) {
      this.errorMessage = 'El usuario ya existe.';
      return;
    }

    users.push({ email: this.email, password: this.password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('¡Registro exitoso!');
    this.router.navigate(['/']);
  }
}

