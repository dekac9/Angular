import { Component, Input, OnInit} from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  @Input() users: string[];
  

  //@Output() userSetToInactive = new EventEmitter<number>();
constructor(private userSetToInactive:UsersServiceService){
  
  this.userSetToInactive.promeni.subscribe(
  (primljeno)=>this.userSetToInactive.onSetToActive(primljeno)
  )
}
ngOnInit() {
  this.users=this.userSetToInactive.activeUsers
  
}

promeniuNeaktivno(broj){
  this.userSetToInactive.promeni.emit(broj)
}

}
