import {Component, Input} from '@angular/core';
import {SnotifyType} from '../../types/Snotify.type';

@Component({
  selector: 'ng-snotify-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  /**
   * Get toast type, to select an item from the list
   */
  @Input() type: SnotifyType;
  constructor() { }
}
