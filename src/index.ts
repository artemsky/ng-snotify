import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnotifyComponent } from './snotify/snotify.component';
import { ToastComponent } from './snotify/toast/toast.component';
import { SnotifyService } from './snotify/snotify.service';
import { TruncatePipe } from './snotify/pipes/truncate.pipe';
import { ButtonsComponent } from './snotify/toast/button/buttons.component';
import { PromptComponent } from './snotify/toast/prompt/prompt.component';
import { KeysPipe } from './snotify/pipes/keys.pipe';

export * from './snotify/snotify.component';
export * from './snotify/snotify.service';
export * from './snotify/interfaces/Snotify.interface';
export * from './snotify/interfaces/SnotifyButton.interface';
export * from './snotify/interfaces/SnotifyToastConfig.interface';
export * from './snotify/interfaces/SnotifyNotifications.interface';
export * from './snotify/enums/SnotifyPosition.enum';
export * from './snotify/toast/snotify-toast.model';
export * from './snotify/toast/toast.component';
export * from './snotify/pipes/truncate.pipe';
export * from './snotify/pipes/keys.pipe';

export * from './snotify/toast/button/buttons.component';
export * from './snotify/toast/prompt/prompt.component';
export * from './snotify/toastDefaults';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SnotifyComponent, ToastComponent, TruncatePipe,
    ButtonsComponent, PromptComponent, KeysPipe
  ],
  exports: [
    SnotifyComponent, TruncatePipe, KeysPipe
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
