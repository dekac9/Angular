import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prvoPitanje="pet"
  odgovor=""
  genders=['male','female']

 // @ViewChild('f') novoIme:ElementRef
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(f:NgForm){
    console.log(f);
  }
// onSubmit(){
//   console.log(this.novoIme);
// }

}
