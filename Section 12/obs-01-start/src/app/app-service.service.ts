import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  aktiviranEmiter = new Subject<boolean>()
provera:boolean=false
  constructor() { }

//   kliknuto(){
// this.provera=!this.provera
// console.log(this.provera);
//   }
}


