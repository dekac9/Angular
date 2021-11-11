import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  imeServera="";
allowNewServer=false
  constructor() {
    setTimeout(() => {
      this.allowNewServer=true
    }, 2000);
   }

  ngOnInit(): void {
    
  }
  onCreateServer(){
      this.serverCreation="Napravljen je server"+this.imeServera;
      

    }
serverCreation:string="Nije napravljen server"

onUpdateServerName(event:any){
// this.serverCreation=event.data
this.imeServera=event.target.value
//console.log(event.target.value)
}

}
