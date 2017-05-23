import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnotifyComponent } from './snotify.component';
import { ToastComponent } from './toast/toast.component';
import { IconComponent } from './toast/icon/icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SnotifyComponent],
  declarations: [SnotifyComponent, ToastComponent, IconComponent]
})
export class SnotifyModule { }
