import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domaci'
})
export class DomaciPipe implements PipeTransform {
  
  transform(value: string) {
let podeljeno=value.split('')
let obrnuto=podeljeno.reverse();
let spojenoIspis=obrnuto.join('')
    
    return (spojenoIspis);

  }

}
