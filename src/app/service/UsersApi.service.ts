import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { RegisterRequest } from '../dtos/registerRequest';
import { UserResponse } from '../dtos/userResponse';
import LoginRequest from '../dtos/loginRequest';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private readonly http = inject(HttpClient);

  public async register(request: RegisterRequest): Promise<UserResponse> {
    try {
      return await lastValueFrom(this.http.post<UserResponse>('/api/users/register', request));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async authenticate(request: LoginRequest): Promise<UserResponse> {
    try {
      console.log(request);

      return await lastValueFrom(this.http.post<UserResponse>('/api/users/authenticate', request));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
