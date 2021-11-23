import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
@Input() recepie
@Output() podatak=new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  kliknuto(){
this.podatak.emit()
//console.log("objeasscscscct");

  }

}
