import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { UserResponse } from '../dtos/userResponse';
import { jwtDecode } from 'jwt-decode';
import moment from 'moment';
import { isPlatformBrowser } from '@angular/common';
import { TUserResponse } from '../Interfaces/TUserResponse';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private user: UserResponse | undefined;
  private platformId = inject(PLATFORM_ID);

  public isLoggedIn(): boolean {
    this.checkForLocalStorage();

    if (this.user !== undefined) {
      const result = jwtDecode(this.user.token);
      if (result.exp !== undefined) {
        if (moment().isBefore(result.exp * 1000)) {
          return true;
        }
      }
    }
    return false;
  }

  public setUser(user: UserResponse): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getToken(): string {
    if (this.user !== undefined) {
      return this.user.token;
    } else {
      throw new Error('User is not authenticated');
    }
  }

  private checkForLocalStorage(): void {
    if (this.user === undefined && isPlatformBrowser(this.platformId)) {
      const str = localStorage.getItem('user');
      if (str !== null) {
        this.user = JSON.parse(str) as TUserResponse;
      }
    }
  }
}
