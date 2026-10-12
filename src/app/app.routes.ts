import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { RegisterPage } from './pages/register.page/register.page';
import { Items } from './pages/items/items';

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
    path: 'items',
    component: Items,
  }
];
