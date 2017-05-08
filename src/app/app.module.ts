import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SnotifyModule} from './snotify/snotify.module';
import {SnotifyService} from "./snotify/snotify/snotify.service";

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
