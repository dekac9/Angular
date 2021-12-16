import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecepieService } from '../../recepie.service';


@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
@Input() recepie
@Input() temp:number


  constructor(private recepieService:RecepieService, private ruta:ActivatedRoute, private ruter:Router) { }

  ngOnInit(){
    console.log(this.temp);
    //NEKI MOJI POKUSAJI
// this.ruta.params.subscribe((params)=>{
// console.log(this.params);
//this.recepie=this.recepieService.receptRutiranje(this.params)
// })
  }

  // 
  //SKLONJENO KAD SAM UVEO RUTIRANJE
  //kliknuto(){
  //   this.recepieService.selektovanRecept.emit(this.recepie)
//this.podatak.emit()
//console.log("objeasscscscct");

  

}
