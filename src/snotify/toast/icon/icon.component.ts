import {Component, Input} from '@angular/core';

@Component({
  selector: 'ng-snotify-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  /**
   * Get toast type, to select an item from the list
   */
  @Input() types;
  constructor() { }
}
