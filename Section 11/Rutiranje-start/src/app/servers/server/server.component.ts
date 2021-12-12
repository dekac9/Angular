import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  servers: {id: number, name: string, status: string};


  constructor(private serversService: ServersService) { }

  ngOnInit() {
  // servers = this.serversService.getServers();
  //  console.log(this.servers);
  }

}
