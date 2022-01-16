import {MatSnackBar} from '@angular/material/snack-bar';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  

export class AppComponent {

constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{duration:1000, horizontalPosition:'right'});
  }

  //numbers = [1, 2, 3, 4, 5];
  neparniBrojevi=[1,3,5];
  parniBrojevi=[2,4]
  onlyParni = false;
  value:number=10
}
