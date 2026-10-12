import { Component, inject, signal } from '@angular/core';
import { ItemsApiService } from '../../service/ItemsApi.service';
import { ItemResponse } from '../../dtos/ItemResponse';

@Component({
  selector: 'app-items',
  styleUrl: './items.css',
  templateUrl: './items.html',
})
export class Items {
  public readonly itemsApiService = inject(ItemsApiService);

  items = signal<ItemResponse[]>([
    {
      Id: 'test',
      Name: 'test',
      Description: '',
      BarCode: '',
    },
  ]);

  async ngOnInit() {
    this.items.set(await this.itemsApiService.getItems());

    console.log(this.items());
  }
}
