import { EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService{

  //promeni=new EventEmitter<any>()
  activeUsers= ['Max', 'Anna'];
  inactiveUsers =['Chris', 'Manu'];

  constructor() { 

  }

    onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}

