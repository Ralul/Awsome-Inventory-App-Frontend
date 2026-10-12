import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { RegisterRequest } from '../dtos/registerRequest';
import { UserResponse } from '../dtos/userResponse';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private readonly http = inject(HttpClient);

  public async register(request: RegisterRequest): Promise<UserResponse> {
    try {
      return await lastValueFrom(
        this.http.post<UserResponse>('/api/users/register', request),
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
