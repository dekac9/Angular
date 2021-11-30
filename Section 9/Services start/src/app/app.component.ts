import { Component, OnInit } from '@angular/core';
import { AcountService } from './acount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
accounts :{name:string,status:string}[]=[]
constructor(private accountService:AcountService){}

ngOnInit(){
  this.accounts=this.accountService.accounts
}

}
