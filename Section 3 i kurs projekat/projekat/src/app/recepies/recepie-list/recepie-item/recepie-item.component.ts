import { Component, Input, OnInit} from '@angular/core';
import { RecepieService } from '../../recepie.service';


@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
@Input() recepie


  constructor(private recepieService:RecepieService) { }

  ngOnInit(): void {
  }

  // 
  //SKLONJENO KAD SAM UVEO RUTIRANJE
  //kliknuto(){
  //   this.recepieService.selektovanRecept.emit(this.recepie)
//this.podatak.emit()
//console.log("objeasscscscct");

  

}
