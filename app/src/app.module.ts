import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

//bootstrap
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }   from './app.component';

import { SwitchComponent } from './switch.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
     ],
  declarations: [ 
    AppComponent,
    SwitchComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
