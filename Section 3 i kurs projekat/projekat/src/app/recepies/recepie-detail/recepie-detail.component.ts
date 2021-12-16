import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingrediant.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecepieService } from '../recepie.service';


@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
//@Input() selektovan;
selektovan
  constructor(private shoppingListService:ShoppingListService, private ruta:ActivatedRoute, private ruter:Router, private recepieService:RecepieService) { }

temp:number

  ngOnInit(){
    //console.log(this.selektovan);
    this.temp=this.ruta.snapshot.params.id
    //console.log(this.ruta.snapshot.params.id);
// this.selektovan=this.recepieService.receptRutiranje(this.temp);
// console.log(this.selektovan);
//GORNJI PRISTUP SE AKTIVIRA SAMO ON INIT, MORA DA SE MENJA LOGIKA

this.ruta.params.subscribe((params:Params)=>{
  this.temp=+params.id
  console.log(this.temp);
  this.selektovan=this.recepieService.receptRutiranje(params.id)
 // console.log(params);
  //console.log(params.id);
  //console.log(+params.id);
})

  }
onRecepieEdit(){
  //ovako moze, sledece je samo demonstracija snalazenja po putanjama
  // this.ruter.navigate(['edit'],{relativeTo:this.ruta})

  this.ruter.navigate(['../',this.temp,'edit'], {relativeTo:this.ruta})
  
}

posaljiListi(){
 this.selektovan.ingredients.map((elem:Ingredient[])=>this.shoppingListService.dodaj(elem))

}

}
