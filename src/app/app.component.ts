import { Component } from '@angular/core';
import { Item } from './shared/list/list.model';
import { DataService } from './shared/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public items: Array<Item>;

  constructor(private _dataService: DataService) {
    this.items = _dataService.getItems();
  }

  changeList() {
    this._dataService.reverseList();
  }

}
