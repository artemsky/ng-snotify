import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, SnotifyModule],
  providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults }, SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
