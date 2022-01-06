import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filtriranString: string, propName: string){
    if(value.length === 0 || filtriranString===''){
      return value
    };
    const tempArray=[]
    for(const item of value){
      
      if(item[propName]===filtriranString){
        tempArray.push(item)
      }
      
    }
    return tempArray;
  }

}
