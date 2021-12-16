import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recepies-edit',
  templateUrl: './recepies-edit.component.html',
  styleUrls: ['./recepies-edit.component.css']
})
export class RecepiesEditComponent implements OnInit {
id:number
editMode:boolean=false
  constructor(private ruta:ActivatedRoute) { }

  ngOnInit(){
    this.ruta.params.subscribe((params:Params)=>{
      this.id=+params.id;
      this.editMode=params['id']!=null
      console.log(this.editMode);
    })
  }

}
