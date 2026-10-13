import { Component, inject } from '@angular/core';
import { LoginComponent } from '../../component/login.component/login.component';
import LoginForm from '../../forms/loginForm';
import LoginRequest from '../../dtos/loginRequest';
import { UsersApiService } from '../../service/UsersApi.service';
import { AuthenticationService } from '../../service/Authentication.service';

@Component({
  imports: [LoginComponent],
  selector: 'app-login-page',
  styleUrl: './login-page.css',
  templateUrl: './login-page.html',
})
export class LoginPage {
  private readonly userApiService = inject(UsersApiService);
  private readonly authentication = inject(AuthenticationService);

  async OnSubmit(form: LoginForm) : Promise<void> {
    const request = {
      email: form.email,
      password: form.password,
    } as LoginRequest;
    const response = await this.userApiService.authenticate(request);

    this.authentication.setUser(response);
  }
}
