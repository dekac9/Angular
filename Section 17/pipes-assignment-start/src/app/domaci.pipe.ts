import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domaci'
})
export class DomaciPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
