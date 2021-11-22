import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parni=[];
  neparni=[]
stigloParent


  prijemBroja(stiglo:number){
    if(stiglo%2==0){
      this.parni.push(stiglo)
    }else{
      this.neparni.push(stiglo)
    }

  console.log(this.parni);
    console.log(this.neparni)

  }
}
