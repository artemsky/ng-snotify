import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SnotifyModule, SnotifyService} from 'ng2-snotify';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SnotifyModule
  ],
  providers: [SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
