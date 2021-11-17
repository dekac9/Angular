import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unos',
  templateUrl: './unos.component.html',
  styleUrls: ['./unos.component.css']
})
export class UnosComponent implements OnInit {
 serverElements = [];
  newServerName = '';
  newServerContent = '';

  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
