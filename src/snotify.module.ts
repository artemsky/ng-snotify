import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnotifyComponent } from './snotify/snotify.component';
import { ToastComponent } from './snotify/toast/toast.component';
import { IconComponent } from './snotify/toast/icon/icon.component';
import {TruncatePipe} from './snotify/pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SnotifyComponent, TruncatePipe],
  declarations: [SnotifyComponent, ToastComponent, IconComponent]
})
export class SnotifyModule { }
