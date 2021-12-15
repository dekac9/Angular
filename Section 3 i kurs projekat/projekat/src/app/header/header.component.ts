import { Component} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})



export class HeaderComponent{
//@Output() kliknutLinkEmiter=new EventEmitter<string>()
//bilo j epotrebno pre rutiranja

constructor(private ruter:Router, private ruta:ActivatedRoute){

}

//   kliknutLink(pristiglo:string){

// this.kliknutLinkEmiter.emit(pristiglo)s
// console.log(pristiglo);
//   kliknutLink(pravacRutiranja:string){

// if(pravacRutiranja=='recepies'){
//   this.ruter.navigate(['recepies'], {relativeTo:this.ruta})
// }else if(pravacRutiranja=='shoppingList') {
//   this.ruter.navigate(['shoppingList'], {relativeTo:this.ruta})


    
 // }

}