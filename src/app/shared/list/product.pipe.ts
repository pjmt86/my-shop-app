import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {
  transform(id: number, description: String) {
    return 'product' + id + '-' + description;
  }
}
