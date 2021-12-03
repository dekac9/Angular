import { Component, OnInit,} from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {

ingredients:Ingredient[]=[
  // new Ingredient("grasak",100),
  // new Ingredient("pirinac",879)
];
  constructor(private shopingList:ShoppingListService) {

  }



  ngOnInit(): void {

this.ingredients=this.shopingList.dajSastojke()
this.shopingList.promenjeniSastojci.subscribe(
  (ingredients:Ingredient[])=>{this.ingredients=ingredients}
)
// this.shopingList.dodato.subscribe(
//   (stiglo)=>{
//     this.ingredients=stiglo
//     console.log(stiglo);

  // })

  
  }

}
