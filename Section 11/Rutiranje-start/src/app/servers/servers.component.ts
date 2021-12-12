import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public server: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router:Router) { }

  ngOnInit() {
    this.server = this.serversService.getServers();
    //console.log(this.server);
  }
onReload(){
//this.router.navigate(['/servers'])
}
}
