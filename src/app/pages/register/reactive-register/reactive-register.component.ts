import { Component } from '@angular/core';
import {
  ReactiveRegisterFormComponent
} from '../../../components/reactive-register-form.component/reactive-register-form.component';

@Component({
  imports: [ReactiveRegisterFormComponent],
  selector: 'reactive-register',
  styleUrl: './reactive-register.component.css',
  templateUrl: './reactive-register.component.html',
})
export class ReactiveRegister {}
