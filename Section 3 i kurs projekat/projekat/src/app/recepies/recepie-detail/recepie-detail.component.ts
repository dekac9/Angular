import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingrediant.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';


@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
@Input() selektovan;

  constructor(private shoppingListService:ShoppingListService, private ruta:ActivatedRoute, private ruter:Router) { }

  ngOnInit(){
    console.log(this.ruta.params);
this.ruta.params.subscribe((data)=>{console.log(data);})
  }
temp(){
  console.log("kliknuto!");
}

posaljiListi(){
 this.selektovan.ingredients.map((elem:Ingredient[])=>this.shoppingListService.dodaj(elem))

}

}
