import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Item } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() itemList: Array<Item>;
  @Output() changeList: EventEmitter<number> = new EventEmitter<number>();

  emitEvent() {
    this.changeList.emit();
  }
}
