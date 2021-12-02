import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
brojac:number=0
  constructor() { }

  promenaBrojaca(){
    this.brojac=this.brojac+1
    console.log(this.brojac);
  }
}
