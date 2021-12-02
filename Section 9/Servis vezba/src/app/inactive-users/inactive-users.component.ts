import { Component, Input, OnInit} from '@angular/core';
import { CounterServiceService } from '../counter-service.service';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  @Input() users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();

  constructor(private userSetToActive:UsersServiceService,private brojac:CounterServiceService){
    // this.userSetToActive.promeniuNeaktivno.emit(this.users)

this.userSetToActive.promeni.subscribe(
  (primljeno)=>this.userSetToActive.onSetToInactive(primljeno)
)
  }
ngOnInit(): void {
  this.users=this.userSetToActive.inactiveUsers
  
}
napraviuAktivno(broj){
  this.userSetToActive.onSetToActive(broj),
  this.brojac.promenaBrojaca()

}
}
