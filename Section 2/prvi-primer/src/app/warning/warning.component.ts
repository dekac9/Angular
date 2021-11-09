import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styles: [`h2{
    color:red
  }`]
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
