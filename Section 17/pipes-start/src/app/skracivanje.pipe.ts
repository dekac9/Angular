import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'kratko'
})
export class Skracivanje implements PipeTransform{
transform(value:any, limit:number){
  if(value.length>limit){
    return value.slice(0,limit)+' ...'
  }
return value
}
}