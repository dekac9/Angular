import { Component, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
upisanMail=false
upisanPass=false
placeholderSelekta="advanced"
sve={
  mail:"",
  vrsta:"",
  pass:""
}
ispravno=false

onSubmit(celaforma:NgForm ){
// this.upisanMail=true ?(!celaforma.form.controls.eposta.valid && celaforma.form.controls.eposta.untouched):false
if(!celaforma.form.controls.email.valid && !celaforma.form.controls.email.untouched ){
this.upisanMail=true

}
if(!celaforma.form.controls.tajnaLozinka.valid && !celaforma.form.controls.email.untouched ){
this.upisanPass=true
}
 console.log(celaforma.form.controls.email.valid);
  if(celaforma.form.valid && !celaforma.form.untouched){
this.ispravno=true
 
  this.sve.mail=celaforma.form.value.email
  this.sve.vrsta=celaforma.form.value.vrstaPretplate
  this.sve.pass=celaforma.form.value.tajnaLozinka
  console.log("ispravno");
console.log(celaforma.form.value);
  }else{
    console.log("nije ispravna forma")
  }
  

}


}
