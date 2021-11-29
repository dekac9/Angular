import { Component} from '@angular/core';
import { AcountService } from '../acount.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService, AcountService]
})
export class NewAccountComponent {


constructor(private loggingService:LoggingService, private accountService:AcountService){}

onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus)
    this.loggingService.LogStatusChange(accountStatus)
    
  }
}
