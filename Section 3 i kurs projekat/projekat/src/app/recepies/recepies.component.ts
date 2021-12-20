import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers:[RecepieService]
})
export class RecepiesComponent implements OnInit, OnDestroy {
private pretplataRecept:Subscription
selektovanRecept;
  constructor(private recepieService:RecepieService) { }

  ngOnInit(){
    this.pretplataRecept=this.recepieService.selektovanRecept.subscribe(
      (recepie)=>{
        this.selektovanRecept=recepie
      }
    )
  }
ngOnDestroy(): void {
    this.pretplataRecept.unsubscribe()
}


}
