import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnotifyComponent } from './snotify/snotify.component';
import { ToastComponent } from './snotify/toast/toast.component';
import { IconComponent } from './snotify/toast/icon/icon.component';
import {SnotifyService} from './snotify/snotify.service';


export * from './snotify/snotify.component';
export * from './snotify/snotify.service';
export * from './snotify/snotify-config';
export * from './snotify/toast/snotify-toast.model';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SnotifyComponent, ToastComponent, IconComponent
  ],
  exports: [
    SnotifyComponent
  ]
})
export class SnotifyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SnotifyModule,
      providers: [SnotifyService]
    };
  }
}
