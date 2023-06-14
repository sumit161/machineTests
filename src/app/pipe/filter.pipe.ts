import { Pipe, PipeTransform } from '@angular/core';
import { Iusers } from '../share/model/userInterface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<Iusers>, search: string): Array<Iusers> {
    if (!search) {
      return value;
    }
    if (!value) {
      return [];
    }
    return value.filter((ele) =>
      ele.Name.toLowerCase().trim().includes(search.toLocaleLowerCase().trim())
    );
  }
}
