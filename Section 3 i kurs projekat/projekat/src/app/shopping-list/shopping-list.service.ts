import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  promenjeniSastojci=new EventEmitter<Ingredient[]>()
private ingredients:Ingredient[]=[
  new Ingredient("grasak",100),
  new Ingredient("pirinac",879)
]

dodato=new EventEmitter<any>()

dajSastojke(){
  return this.ingredients.slice()
}

  constructor() { }

  dodaj(stiglo){
this.ingredients.push(stiglo)
console.log(stiglo);
this.promenjeniSastojci.emit(this.ingredients.slice())

}
}
