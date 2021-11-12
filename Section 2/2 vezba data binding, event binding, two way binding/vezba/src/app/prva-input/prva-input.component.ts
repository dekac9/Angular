import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prva-input',
  templateUrl: './prva-input.component.html',
  styleUrls: ['./prva-input.component.css']
})
export class PrvaInputComponent implements OnInit {
usernameString="";
nestoUpisano=false
omoguciKlik(vrednost:any){
  if(vrednost.target.value.length>0){
(this.nestoUpisano)=true
  }else{
    this.nestoUpisano=false
  }

}

promeni(inputValue:any){
  this.usernameString=inputValue.target.value
  
}

obrisiString(){
  this.usernameString=""
  this.nestoUpisano=false
  alert("Obrisan je string")
}


  constructor() { }

  ngOnInit(): void {
  }


}
