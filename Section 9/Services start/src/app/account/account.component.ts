import { Component, Input } from '@angular/core';
import { AcountService } from '../acount.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService, AcountService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


constructor(private loggingService:LoggingService, private accountService:AcountService){}

  onSetTo(status: string) {
 this.accountService.updateStatus(this.id,status)
    this.loggingService.LogStatusChange(status)
  }
  
}
