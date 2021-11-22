import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControllComponent } from './game-controll/game-controll.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControllComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
