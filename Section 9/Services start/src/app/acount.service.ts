import { EventEmitter, Injectable } from '@angular/core';

import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AcountService {
accounts:{name:string,status:string}[]= [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  constructor(private loggingService:LoggingService) { }
name:string

statusUpdated=new EventEmitter<string>()

  addAccount(name:string, status:string){
this.accounts.push({name:name,status:status});
this.loggingService.LogStatusChange(name,status)
  }
  updateStatus(id:number,status:string){
this.accounts[id].status = status;
this.name=this.accounts[id].name
this.loggingService.LogStatusChange(status,this.name)
  }
}
