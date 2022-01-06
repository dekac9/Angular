import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:false
})
export class SortPipe implements PipeTransform {

  transform(value: any){

function compare(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

return (value.sort(compare));

//     let sortiranje=[]
    
//   sortiranje=value.ime.sort()

// return console.log(sortiranje);


    // let niz=[]
    // value.forEach(element => {
    //   niz.push(element.name)
    // });
    // niz.sort()
    
    // return  niz;
  }

}
