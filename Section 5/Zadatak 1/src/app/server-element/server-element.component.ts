import { Component, OnInit,Input, OnChanges, SimpleChanges, DoCheck,AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {
@Input("srvElement") element:{type:string,name:string,content:string};
  

constructor() { 
  console.log("Konstruktor pozvan")
}

ngOnChanges(changes:SimpleChanges){
  console.log("ngOnChange pozvan")
  console.log(changes)
}

ngDoCheck(){
  console.log("ngDoCheck pozvan")
}

ngOnInit(): void {
    console.log("ngOnInit pozvan")
}

ngAfterContentInit(): void {
  console.log("AfterContentInit pozvan")
  
}
ngOnDestroy():void {
  console.log("Destroy pozvan")
}}
