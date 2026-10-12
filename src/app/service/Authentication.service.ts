import { Injectable } from '@angular/core';
import { UserResponse } from '../dtos/userResponse';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private user: UserResponse | undefined;

  setUser(user: UserResponse) {
    this.user = user;
  }

  getToken(): string {
    if (this.user !== undefined) {
      return this.user.token;
    } else {
      throw new Error('User is not authenticated');
    }
  }
}
