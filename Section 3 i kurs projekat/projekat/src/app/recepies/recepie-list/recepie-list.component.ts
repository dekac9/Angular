import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {




recepies:Recepie[]=[];
  constructor(private recepieService:RecepieService, private ruta:ActivatedRoute, private ruter:Router) { }

  ngOnInit() {
    this.recepies=this.recepieService.getRecepies()
    
  }

  onNewRecepie(){
this.ruter.navigate(['new'],{relativeTo:this.ruta})
  }




}
