import { ModuleWithProviders, NgModule } from '@angular/core';
import { SnotifyComponent } from './components/snotify/snotify.component';
import { SnotifyService } from './services/snotify.service';
import { KeysPipe } from './pipes/keys.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SnotifyComponent, ToastComponent, TruncatePipe, ButtonsComponent, PromptComponent, KeysPipe],
  exports: [SnotifyComponent, TruncatePipe, KeysPipe]
})
export class SnotifyModule {
  static forRoot(): ModuleWithProviders<SnotifyModule> {
    return {
      ngModule: SnotifyModule,
      providers: [SnotifyService]
    };
  }
}
