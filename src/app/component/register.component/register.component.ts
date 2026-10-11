import { Component, output, signal } from '@angular/core';
import { RegisterForm } from '../../forms/registerForm';
import { form, FormField, required, submit } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-register',
  styleUrl: './register.component.css',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  submitEvent = output<RegisterForm>();
  cancelEvent = output();

  registerModel = signal<RegisterForm>({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  registerForm = form(this.registerModel, (schema) => {
    required(schema.username);
  });

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitEvent.emit(this.registerModel())
  }
}
