import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
// Importa FormsModule para poder usar [(ngModel)] en los formularios
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login', 
  standalone: true, // Indica que este componente es independiente (no necesita ser declarado en un módulo)
  imports: [FormsModule, RouterModule], // Importa los módulos necesarios para el funcionamiento del componente
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  // Variables que almacenan los datos del formulario y mensajes de error/éxito
  email = '';             
  password = '';          
  errorMessage = ''; 
  successMessage = '';    

  // Constructor que inyecta el servicio Router para realizar navegaciones programáticas
  constructor(private router: Router) {}

  // Método que se ejecuta al hacer clic en el botón de inicio de sesión
  onLogin(): void {
    // Obtiene la lista de usuarios guardada en localStorage, o un array vacío si no hay nada
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Busca un usuario cuyo correo y contraseña coincidan con los ingresados
    const user = users.find((u: any) => u.email === this.email && u.password === this.password);

    // Si no se encuentra un usuario válido, muestra mensaje de error
    if (!user) {
      this.errorMessage = 'Correo o contraseña incorrectos.';
      this.successMessage = ''; // Limpia el mensaje de éxito si lo hubiera
      return;
    }

    // Si el usuario existe, limpia el mensaje de error y muestra el de éxito
    this.errorMessage = '';
    this.successMessage = 'Inicio de sesión exitoso.';

    // Redirige al usuario a la ruta "/dashboard"
    this.router.navigate(['/dashboard']);
  }
}
