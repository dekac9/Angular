import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrediant.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';


@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
@Input() selektovan;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }
temp(){
  console.log("kliknuto!");
}

posaljiListi(){
 this.selektovan.ingredients.map((elem:Ingredient[])=>this.shoppingListService.dodaj(elem))

}

}
