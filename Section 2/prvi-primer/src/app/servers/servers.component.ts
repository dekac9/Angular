import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  imeServera="Test server";
  serverCreated=false;
allowNewServer=false;
servers=['TEST', 'TEST2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer=true
    }, 2000);
   }

  ngOnInit(): void {
    
  }
  onCreateServer(){
      this.serverCreation="Napravljen je server "+this.imeServera;
      this.servers.push(this.imeServera);
      this.serverCreated=true

    }
serverCreation:string="Nije napravljen server"

onUpdateServerName(event:Event){
// this.serverCreation=event.data
this.imeServera=(<HTMLInputElement>event.target).value
//console.log(event.target.value)
}

}
