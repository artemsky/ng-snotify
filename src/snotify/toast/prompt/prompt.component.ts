import {
  ChangeDetectionStrategy, Component, Input,
  ViewEncapsulation
} from '@angular/core';
import {SnotifyToast} from '../snotify-toast.model';

@Component({
  selector: 'ng-snotify-prompt',
  templateUrl: './prompt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

/**
 * Prompt component. Part of PROMPT type
 */
export class PromptComponent {
  /**
   * Get PROMPT placeholder
   */
  @Input() toast: SnotifyToast;
  /**
   * Is PROMPT focused
   * @type {boolean}
   */
  isPromptFocused = false;
}
