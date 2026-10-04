import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../models/registerRequest';
import { lastValueFrom } from 'rxjs';
import { AuthenticateResponse } from '../models/authenticateResponse';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private readonly http = inject(HttpClient);

  public async register(request: RegisterRequest): Promise<AuthenticateResponse> {
    try {
      return await lastValueFrom(
        this.http.post<AuthenticateResponse>('http://localhost:5174/users/register', request),
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
