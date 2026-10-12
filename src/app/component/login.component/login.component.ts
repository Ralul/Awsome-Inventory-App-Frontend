import { Component, output, signal } from '@angular/core';
import LoginForm from '../../forms/loginForm';
import { form, FormField, required, schema } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-login',
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  submitEvent = output<LoginForm>();
  cancelEvent = output();

  loginModel = signal<LoginForm>({
    email: '',
    password: ''
  } as LoginForm);

  loginForm = form(this.loginModel, (schema) => {
    required(schema.password);
    required(schema.email);
  });

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitEvent.emit(this.loginModel());
  }

  onCancel() {
    this.cancelEvent.emit();
  }
}
