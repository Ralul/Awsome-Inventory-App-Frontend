import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { RegisterPage } from './pages/register-page/register-page';
import { ItemsPage } from './pages/items-page/items-page';
import { LoginPage } from './pages/login-page/login-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'register',
    component: RegisterPage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'items',
    component: ItemsPage,
  }
];
