import { Component, Input } from '@angular/core';
import { AcountService } from '../acount.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 name:string

constructor(private loggingService:LoggingService, private accountService:AcountService){}

  onSetTo(status: string) {
   
 this.accountService.updateStatus(this.id,status)
 this.name=this.account.name
 //console.log(this.account.name);
    //this.loggingService.LogStatusChange(status,this.name)
    this.accountService.statusUpdated.emit(status)
  }
  
}
