import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingrediant.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  promenjeniSastojci=new Subject<Ingredient[]>()
private ingredients:Ingredient[]=[
  new Ingredient("grasak",100),
  new Ingredient("pirinac",879)
]

dodato=new Subject<any>()

dajSastojke(){
  return this.ingredients.slice()
}

  constructor() { }

  dodaj(stiglo){
this.ingredients.push(stiglo)
console.log(stiglo);
this.promenjeniSastojci.next(this.ingredients.slice())

}
}
