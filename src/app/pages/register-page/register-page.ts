import { Component, inject } from '@angular/core';
import { RegisterComponent } from '../../component/register.component/register.component';
import { UsersApiService } from '../../service/UsersApi.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/Authentication.service';
import RegisterRequest from '../../dtos/registerRequest';
import RegisterForm from '../../forms/registerForm';

@Component({
  selector: 'app-register-page',
  styleUrl: './register-page.css',
  templateUrl: './register-page.html',
  imports: [RegisterComponent],
})
export class RegisterPage {
  private readonly userApiService = inject(UsersApiService);
  private router = inject(Router);
  private authentication = inject(AuthenticationService);

  async onSubmit(form: RegisterForm): Promise<void> {
    const request = {
      username: form.username,
      email: form.email,
      password: form.password,
    } as RegisterRequest;
    const result = await this.userApiService.register(request);

    this.authentication.setUser(result);
    await this.router.navigate(['/', 'items']);
  }
}
