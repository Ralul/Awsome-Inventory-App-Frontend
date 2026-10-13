import { Component, inject, OnInit, signal } from '@angular/core';
import { ItemsApiService } from '../../service/ItemsApi.service';
import { ItemResponse } from '../../dtos/ItemResponse';

@Component({
  selector: 'app-items-page',
  styleUrl: './items-page.css',
  templateUrl: './items-page.html',
})
export class ItemsPage implements OnInit {
  public readonly itemsApiService = inject(ItemsApiService);

  private readonly items = signal<ItemResponse[]>([
    {
      Id: 'test',
      Name: 'test',
      Description: '',
      BarCode: '',
    },
  ]);

  async ngOnInit() : Promise<void> {
    this.items.set(await this.itemsApiService.getItems());

    console.log(this.items());
  }
}
