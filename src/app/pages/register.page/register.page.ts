import { Component, inject } from '@angular/core';
import { RegisterForm } from '../../forms/registerForm';
import { RegisterComponent } from '../../component/register.component/register.component';
import { UsersApiService } from '../../service/UsersApi.Service';
import { RegisterRequest } from '../../dtos/registerRequest';

@Component({
  selector: 'register.page',
  styleUrl: './register.page.css',
  templateUrl: './register.page.html',
  imports: [RegisterComponent],
})
export class RegisterPage {
  private readonly userApiService = inject(UsersApiService)

  onSubmit(form: RegisterForm) {
    const request = {
      username: form.username,
      email: form.email,
      password: form.password,
    } as RegisterRequest;
    this.userApiService.register(request)
  }
}
