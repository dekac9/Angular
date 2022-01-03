import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { resolve } from 'dns';
import { Observable } from 'rxjs';

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
         'email': new FormControl(null, [Validators.required, Validators.email],this.zabranjenMail.bind(this))
       }),       
       'gender':new FormControl('male'),
       'hobbiji': new FormArray([])
     })

    //  this.forma.valueChanges.subscribe(
    //    (value)=>console.log(value)
    //  )

    this.forma.setValue({
      'userData':{
        'username':'Dejan',
        'email':'dejan@test.com'
      },
      'gender':'female',
      'hobbiji':[]
    })

    this.forma.patchValue({
      'gender':'male'
    })

    this.forma.statusChanges.subscribe(
      (status)=>console.log(status)
    )
  }

  onSubmit(){
    console.log(this.forma);
    this.forma.reset(
      {
      'userData':{
        'username':'Dejan',
        'email':'dejan@test.com'
      },
      'gender':'female',
      'hobbiji':[]
   } )
  }

  zabranjenaImena(controll:FormControl):{[s:string]:boolean}{
if(this.zabranjeniUsernames.indexOf(controll.value)!==-1){
  return{'imeZabranjeno':true}
}
return null
  }

  zabranjenMail(nekoIme:FormControl):Promise<any>|Observable<any>{const promise=new Promise<any>((resolve,reject)=>{
    setTimeout(() => {
      if(nekoIme.value==='test@test.com'){
        resolve({'emailZabranjen':true})
      }else{
        resolve(null)
      }
    }, 1500);
  })
  return promise
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
