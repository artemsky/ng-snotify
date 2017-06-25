import {Component, Input} from '@angular/core';
import {SnotifyButton} from '../../interfaces/SnotifyButton.interface';

@Component({
  selector: 'ng-snotify-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  @Input() buttons: SnotifyButton[];
  @Input() text: string;
  constructor() {}
}
