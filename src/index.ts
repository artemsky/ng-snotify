import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnotifyComponent } from './snotify/snotify.component';
import { ToastComponent } from './snotify/toast/toast.component';
import { IconComponent } from './snotify/toast/icon/icon.component';
import {SnotifyService} from './snotify/snotify.service';


export * from './snotify/snotify.component';
export * from './snotify/snotify.service';
export * from './snotify/interfaces/Snotify.interface';
export * from './snotify/interfaces/SnotifyAsync.interface';
export * from './snotify/interfaces/SnotifyButton.interface';
export * from './snotify/interfaces/SnotifyConfig.interface';
export * from './snotify/interfaces/SnotifyInfo.interface';
export * from './snotify/interfaces/SnotifyOptions.interface';
export * from './snotify/enum/SnotifyAction.enum';
export * from './snotify/enum/SnotifyPosition.enum';
export * from './snotify/enum/SnotifyType.enum';
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
