import { Component, inject } from '@angular/core';
import { RegisterRequest } from '../../models/registerRequest';
import { FormsModule } from '@angular/forms';
import { UsersApiService } from '../../service/UsersApi.Service';
import { ForbiddenValidatorDirective } from '../../directive/forbidden-name.directive';

@Component({
  imports: [FormsModule, ForbiddenValidatorDirective],
  selector: 'template-register-form',
  styleUrl: './template-register-form.component.css',
  templateUrl: './template-register-form.component.html',
})
export class TemplateRegisterFormComponent {
  private readonly UserApi = inject(UsersApiService);

  model = new RegisterRequest('', '', '', '');

  submitted = false;

  async onSubmit() {
    this.submitted = true;

    console.log(this.model);
    const response = await this.UserApi.register(this.model);
    console.log(response);
  }
}
