import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komponenta',
  templateUrl: './komponenta.component.html',
  styleUrls: ['./komponenta.component.css'],
  styles:[
    `.hidden{
      visibility:hidden
    }
    .belo{
      color:white
    }
    .plavo{
      background:blue;
      color:white
    }`

  ]
})
export class KomponentaComponent implements OnInit {
toggle=false
start=0
array=[0]
boja='belo'
  constructor() { }

  ngOnInit(): void {
  }
toggluj(){
  this.toggle===false?this.toggle=true:this.toggle=false
  this.start++
  this.array.push(this.start)
  console.log(this.start)
  console.log(this.array)
}

}
