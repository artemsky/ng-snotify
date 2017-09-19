import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {SnotifyButton} from '../../interfaces/SnotifyButton.interface';
import {SnotifyService} from '../../snotify.service';

@Component({
  selector: 'ng-snotify-button',
  templateUrl: './buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

/**
 * Buttons component
 */
export class ButtonsComponent {
  /**
   * Get buttons Array
   */
  @Input() buttons: SnotifyButton[];
  /**
   * Get prompt input value
   */
  @Input() text: string;
  /**
   * Get toast id
   */
  @Input() id: number;
  constructor(private service: SnotifyService) {}

  remove() {
    this.service.remove(this.id);
  }
}
