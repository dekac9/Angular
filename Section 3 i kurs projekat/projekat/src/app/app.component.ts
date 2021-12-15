import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'projekat';
aktivnost:string="recepies"

constructor(private ruter:Router){

}

ngOnInit(): void {
this.ruter.navigate(['home'])
  
}

  aktivno(aktivan){
    //console.log(aktivan);
    this.aktivnost=aktivan
    //console.log(this.aktivnost);
  }
}
