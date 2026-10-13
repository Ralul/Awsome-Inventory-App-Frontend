import { Component, output, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import RegisterForm from '../../forms/registerForm';

@Component({
  imports: [FormField],
  selector: 'app-register',
  styleUrl: './register.component.css',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  public readonly submitEvent = output<RegisterForm>();
  public readonly cancelEvent = output();

  private readonly registerModel = signal<RegisterForm>({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  protected registerForm = form(this.registerModel, (schema) => {
    required(schema.username);
  });

  protected onSubmit(event: Event): void {
    event.preventDefault();
    this.submitEvent.emit(this.registerModel());
  }

  protected cancel(): void {
    this.cancelEvent.emit();
  }
}
