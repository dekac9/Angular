import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrvaInputComponent } from './prva-input/prva-input.component';
import { DrugaIspisComponent } from './druga-ispis/druga-ispis.component';
import { TrecaDugmeComponent } from './treca-dugme/treca-dugme.component';
import { UvidUUsernameComponent } from './uvid-u-username/uvid-u-username.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrvaInputComponent,
    DrugaIspisComponent,
    TrecaDugmeComponent,
    UvidUUsernameComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
