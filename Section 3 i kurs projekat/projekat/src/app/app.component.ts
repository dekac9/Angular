import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekat';
aktivnost:string="recepies"

  aktivno(aktivan){
    console.log(aktivan);
    this.aktivnost=aktivan
    console.log(this.aktivnost);
  }
}
