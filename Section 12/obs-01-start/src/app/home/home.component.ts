import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Observable, Subscription } from 'rxjs';
import{filter, map} from'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
private observerSubscription:Subscription
  constructor() { }

  ngOnInit() {
//this.observerSubscription=interval(1000).subscribe((brojac)=>console.log(brojac))
const domacaObservabla=new Observable(observer=>{
  let count=0;
  setInterval(()=>{
    observer.next(count)
    if(count===5){
      observer.complete()
    }
    if(count>3){
      observer.error(new Error('Vece je od 3!'))
    }
    count++
  },1000)
})

// domacaObservabla.pipe(map(data=>{
// return 'runda'+ data;
// }))

this.observerSubscription=domacaObservabla.pipe(filter(data=>{return data!=1}), map((data:Number)=>{
return ('runda '+ data )
})).subscribe((data)=>{console.log(data);},para=>{console.log(para)},()=>{console.log('gotovo');}
)
}

ngOnDestroy(): void {
    this.observerSubscription.unsubscribe()
}
  }


