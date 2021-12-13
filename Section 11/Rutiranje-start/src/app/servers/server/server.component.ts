import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { relative } from 'path';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};


  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
//this.server.id=this.route.snapshot.params.id
const temp=this.route.snapshot.params['id']
  this.server = this.serversService.getServer(+temp);
  console.log(temp);
  this.route.params.subscribe((params:Params)=>{
this.server = this.serversService.getServer(+params['id']);
  })
  }

onEdit(){
  const temp=+this.route.snapshot.params['id']
  console.log('klik');
this.router.navigate(['/servers',temp,'edit'], {relativeTo:this.route, queryParamsHandling:'preserve'})
console.log(temp);
}
}
