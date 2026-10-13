import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './Authentication.service';
import { ItemResponse } from '../dtos/ItemResponse';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsApiService {
  private readonly http = inject(HttpClient);
  private readonly AuthenticationService = inject(AuthenticationService);

  public async getItems(): Promise<ItemResponse[]> {
    try {
      const headers: HttpHeaders = new HttpHeaders().set(
        'Authorization',
        'Bearer ' + this.AuthenticationService.getToken(),
      );
      const request = this.http.get<ItemResponse[]>('api/items', { headers });
      return lastValueFrom(request);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
