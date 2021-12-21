import { Component,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  predlog=""
  prvoPitanje="pet"
  odgovor=""
  genders=['male','female']
  user={
    username:'',
    email:'',
    tajnoPitanje:'',
    pol:'muski'
  }
submitted=false

 @ViewChild('f') novoIme:NgForm

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.predlog=suggestedName
    //console.log(this.novoIme.form.value);
    //this.novoIme.form.patchValue({value:{username:this.predlog}})
    // f.form.patchValue({email:{suggestedName}"@getMaxListeners.com"})
  }

  onSubmit(){
    this.submitted=true

    this.user.username=this.novoIme.form.value.dataGrupa.username;
    this.user.email=this.novoIme.form.value.dataGrupa.email;
    this.user.tajnoPitanje=this.novoIme.form.value.secret;
    this.user.pol=this.novoIme.form.value.gender;
    
  }
// onSubmit(){
//   console.log(this.novoIme);
// }

}
