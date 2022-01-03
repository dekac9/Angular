import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
formaMoja:FormGroup
statusi=['Stable','Critical','Finished']
zabranjenNaziv='Test'
ispis={
  ime:'',
  email:'',
  stanje:'',
}

ngOnInit(): void {
    this.formaMoja=new FormGroup({
      'ime':new FormControl(null, 
        [],this.domaciValidator.bind(this)
        ),
      'mail':new FormControl(null, [Validators.required,Validators.email]),
      'status':new FormControl('Finished')
        })
}
//OVAJ RADI
// domaciValidator(controll:FormControl):{[s:string]:boolean}{
//   if(this.zabranjenNaziv.includes(controll.value)){
//     return {'zabranjeno':true}
//   }else{
//     return(null)
//   }
// }

domaciValidator(controll:FormControl):Promise<any> | Observable<any>{
  const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(controll.value ==='Test'){
        resolve({'asinhronaNeacnost':true})
      }else{
        resolve(null)
      }
    }, 1500);
    
  })
  return promise
}

onSubmit(){
  this.ispis.ime=this.formaMoja.controls.ime.value
  this.ispis.email=this.formaMoja.controls.mail.value
  this.ispis.stanje=this.formaMoja.controls.status.value
  console.log(this.ispis);

}

}
