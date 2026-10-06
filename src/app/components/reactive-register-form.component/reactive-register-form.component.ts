import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { forbiddenNameValidator } from '../../directive/forbidden-name.directive';
import { UsersApiService } from '../../service/UsersApi.Service';
import { RegisterRequest } from '../../models/registerRequest';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'reactive-register-form',
  styleUrl: './reactive-register-form.component.css',
  templateUrl: './reactive-register-form.component.html',
})
export class ReactiveRegisterFormComponent {
  private readonly formBuilder = new FormBuilder();
  private readonly usersService = inject(UsersApiService);

  registerForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/boob/i)]],
    email: [''],
    password: [''],
    passwordConfirmation: [''],
  });

  get username() {
    return this.registerForm.controls.username;
  }

  async onSubmit() {
  }
}
