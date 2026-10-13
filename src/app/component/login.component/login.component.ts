import { Component, output, signal } from '@angular/core';
import LoginForm from '../../forms/loginForm';
import { form, FormField, required } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-login',
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public readonly submitEvent = output<LoginForm>();
  public readonly cancelEvent = output();

  private readonly loginModel = signal<LoginForm>({
    email: '',
    password: '',
  } as LoginForm);

  protected loginForm = form(this.loginModel, (schema) => {
    required(schema.password);
    required(schema.email);
  });

  protected onSubmit(event: Event): void {
    event.preventDefault();
    this.submitEvent.emit(this.loginModel());
  }

  protected onCancel(): void {
    this.cancelEvent.emit();
  }
}
