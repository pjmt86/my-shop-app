import {Injectable} from '@angular/core';
import {Item} from './list/list.model';

@Injectable()
export class DataService {

  private items: Array<Item> = [
    {
      id: 1,
      description: 'Pantalon'
    },
    {
      id: 2,
      description: 'Jersey'
    },
    {
      id: 3,
      description: 'Camisa'
    }
  ];

  contructor() {

  }

  getItems(): Array<Item> {
    return this.items;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }
}
