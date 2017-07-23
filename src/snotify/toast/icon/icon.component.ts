import {Component, Input, ViewEncapsulation} from '@angular/core';
import {SnotifyType} from '../../enum/SnotifyType.enum';

@Component({
  selector: 'ng-snotify-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * Icons component
 */
export class IconComponent {
  /**
   * Get toast type, to select an item from the list
   */
  @Input() type: SnotifyType;
  constructor() { }
}
