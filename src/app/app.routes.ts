import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: IndexComponent },
  { path: 'suscripcion', component: SuscripcionComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'register', component: RegisterComponent }
];
