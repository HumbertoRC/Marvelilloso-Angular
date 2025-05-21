import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

 // Variables del formulario
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  successMessage = '';


 // Constructor con inyección de dependencias
  constructor(private router: Router, private http: HttpClient) { }


  // Método que se ejecuta al hacer clic en el botón de login
  onLogin(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Completa todos los campos.';
      this.successMessage = '';
      return;
    }

    const data = {
      email: this.email,
      password: this.password
    };

     // Envío de solicitud POST al backend para hacer login
    this.http.post<any>('http://localhost:5156/api/auth/login', data).subscribe({
      next: (res) => {
        this.successMessage = res.message || '¡Login exitoso!';
        this.errorMessage = '';
        
        // Redirige al usuario a la ruta /dashboard después de 1 segundo
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Correo o contraseña incorrectos.';
        this.successMessage = '';
      }

    });
  }
}
