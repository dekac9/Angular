import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  @Output() kliknut=new EventEmitter<any>()



recepies:Recepie[]=[];
  constructor(private recepieService:RecepieService) { }

  ngOnInit() {
    this.recepies=this.recepieService.getRecepies()
  }



  saljiDalje(recept){
    console.log(recept);
    this.kliknut.emit(recept)
    
  }

}
