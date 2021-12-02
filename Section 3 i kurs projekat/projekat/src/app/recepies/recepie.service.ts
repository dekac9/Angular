import { EventEmitter, Injectable } from '@angular/core';

import { Recepie } from './recepie.model';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {
  selektovanRecept=new EventEmitter<Recepie>()
private recepies:Recepie[]=[
  new Recepie('Test recept', 'Ovo je samo test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  new Recepie("Drugi recept", 'Drugi opis', 'https://www.simplyrecipes.com/thmb/UyCJN4g__IiBR8aHOJ9yKd8kcSk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__01__cheesy-bread-vertical-a-1800-6b76aa9ce7024535af1901d8a9a2e458.jpg')
];
getRecepies(){
  return this.recepies.slice()
}
  constructor() { }
}
