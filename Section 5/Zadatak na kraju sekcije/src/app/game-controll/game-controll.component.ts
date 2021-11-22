import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {
broj:number
paran:true
brojac:any
@Output() slanjeBroja=new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  pokreni(){
    this.brojac=setInterval(()=>{this.broj=Math.round(Math.random()*10)
      
  this.slanjeBroja.emit(this.broj)},1000);

  }




  zaustavi(){
clearInterval(this.brojac)
  }
}
