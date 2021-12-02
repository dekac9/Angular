import { Component, OnInit} from '@angular/core';
import { CounterServiceService } from '../counter-service.service';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  //@Input() 
  users: string[];
  

  //@Output() userSetToInactive = new EventEmitter<number>();
constructor(private userSetToInactive:UsersServiceService,
            private brojac:CounterServiceService
  ){
  
  // this.userSetToInactive.promeni.subscribe(
  // (primljeno)=>this.userSetToInactive.onSetToActive(primljeno)
  // )
}
ngOnInit() {
  this.users=this.userSetToInactive.activeUsers
  
}

promeniuNeaktivno(broj:number){
  this.userSetToInactive.onSetToInactive(broj)
  this.brojac.promenaBrojaca()
}

}
