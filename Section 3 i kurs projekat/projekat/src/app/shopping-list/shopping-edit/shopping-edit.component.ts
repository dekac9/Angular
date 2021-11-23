import { Component, OnInit, ViewChild,ElementRef, Output} from '@angular/core';

import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput",{static:false}) primljenoName:ElementRef
  @ViewChild("amountInput",{static:false}) primljenoAmount:ElementRef
@Output() promena= new EventEmitter<any>();

  tempIme:string
  tempKolicina:number



  constructor() { }

  ngOnInit(): void {
  }
// uzmiPodatke(nameInput:HTMLInputElement){
// console.log(nameInput.value);
// }
//OVO GORE JE PREKO LOKALNIH REFERENCI

  uzmiPodatke(){
    
    this.tempIme=this.primljenoName.nativeElement.value
    console.log(this.tempIme);
    this.tempKolicina=this.primljenoAmount.nativeElement.value
  
    console.log(this.tempKolicina);

this.promena.emit({name:this.tempIme,amount:this.tempKolicina})
  }

}

