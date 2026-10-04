import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { TemplateRegister } from './pages/register/template-register/template-register';
import { ReactiveRegister } from './pages/register/reactive-register/reactive-register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'register/template',
    component: TemplateRegister,
  },
  {
    path: 'register/reactive',
    component: ReactiveRegister,
  },
];
