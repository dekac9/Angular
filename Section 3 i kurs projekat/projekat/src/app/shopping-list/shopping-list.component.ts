import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[]=[
  new Ingredient("grasak",100),
  new Ingredient("pirinac",879)
];
  constructor() {

   }

  ngOnInit(): void {
  }

}
