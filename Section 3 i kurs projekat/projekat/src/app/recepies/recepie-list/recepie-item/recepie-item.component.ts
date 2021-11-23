import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
@Input() recepie
  constructor() { }

  ngOnInit(): void {
  }

}
