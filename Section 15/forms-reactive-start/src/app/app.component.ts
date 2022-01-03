import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  forma:FormGroup;
  zabranjeniUsernames=['Ana', 'Misa']

  ngOnInit(): void {
     this.forma = new FormGroup({
       'userData':new FormGroup({
         'username': new FormControl(null, [Validators.required,this.zabranjenaImena.bind(this)]),
         'email': new FormControl(null, [Validators.required, Validators.email])
       }),       
       'gender':new FormControl('male'),
       'hobbiji': new FormArray([])
     })
  }

  onSubmit(){
    console.log(this.forma);
  }

  zabranjenaImena(controll:FormControl):{[s:string]:boolean}{
if(this.zabranjeniUsernames.indexOf(controll.value)!==-1){
  return{'imeZabranjeno':true}
}
return null
  }

//   onDodajHobi(){
//     const control=new FormControl(null, Validators.required);
// (<FormArray>this.forma.get('hobbiji')).push(control)
// console.log(this.forma);

//   }

// onDodajHobi(){
//   this.hobbiji.pus
// }

//  get hobbiji() {
//   return this.forma.controls[this.hobbiji] as FormControl
// }
}
