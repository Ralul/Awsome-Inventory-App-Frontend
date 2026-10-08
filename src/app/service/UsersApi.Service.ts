import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm } from '../forms/registerForm';
import { lastValueFrom } from 'rxjs';
import { AuthenticateResponse } from '../dtos/authenticateResponse';
import { RegisterRequest } from '../dtos/registerRequest';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private readonly http = inject(HttpClient);

  public async register(request: RegisterRequest): Promise<AuthenticateResponse> {
    try {
      return await lastValueFrom(
        this.http.post<AuthenticateResponse>('/api/users/register', request),
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
