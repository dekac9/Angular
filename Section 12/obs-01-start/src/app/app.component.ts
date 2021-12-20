import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  aktiviran=false
  private subskripcija:Subscription
  constructor(private servis:AppServiceService) {}

  ngOnInit() {
    this.subskripcija=this.servis.aktiviranEmiter.subscribe(data=>{this.aktiviran=data})
  }
  ngOnDestroy(): void {
      this.subskripcija.unsubscribe()
  }
}
