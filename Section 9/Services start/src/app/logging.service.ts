import { Injectable } from "@angular/core";

@Injectable()

export class LoggingService{
  LogStatusChange(status:string,name:string){
    console.log(name);
    console.log('A server status'+' ' + name +' ' + 'changed, new status: ' + status);
  }
}