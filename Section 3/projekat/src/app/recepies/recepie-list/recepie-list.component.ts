import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
recepies=[];
  constructor() { }

  ngOnInit(): void {
  }

}
