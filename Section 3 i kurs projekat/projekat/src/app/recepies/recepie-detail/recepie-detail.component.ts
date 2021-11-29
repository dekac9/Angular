import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
@Input() selektovan;

  constructor() { }

  ngOnInit(): void {
  }
temp(){
  console.log("kliknuto!");
}

}
