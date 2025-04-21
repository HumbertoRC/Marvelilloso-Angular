import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: IndexComponent }
];
