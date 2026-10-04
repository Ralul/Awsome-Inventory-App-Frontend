import { Component } from '@angular/core';

import {
  TemplateRegisterFormComponent
} from '../../../components/template-register-form.component/template-register-form.component';

@Component({
  imports: [TemplateRegisterFormComponent],
  selector: 'template-register',
  styleUrl: './template-register.css',
  templateUrl: './template-register.html',
})
export class TemplateRegister {}
