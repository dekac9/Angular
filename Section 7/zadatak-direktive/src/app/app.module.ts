import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicOsvetliDirektiva } from './osvetli/basic-osvetli.directive';
import { BoljeOsvetliDirective } from './bolje-osvetli/bolje-osvetli.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicOsvetliDirektiva,
    BoljeOsvetliDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
