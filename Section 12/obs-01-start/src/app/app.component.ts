import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  aktiviran=false
  constructor(private servis:AppServiceService) {}

  ngOnInit() {
    this.servis.aktiviranEmiter.subscribe(data=>{this.aktiviran=data})
  }
}
