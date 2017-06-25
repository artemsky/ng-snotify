import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SnotifyService} from '../../snotify.service';

@Component({
  selector: 'ng-snotify-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {
  @Input() placeholder: string;
  @Output() valueChanged = new EventEmitter<string>();

  length: number;
  id: number;
  isPromptFocused = false;
  isPromptActive = false;

  constructor() {
    this.id = SnotifyService.generateRandomId();
  }

  ngOnInit() {
    this.valueChanged.subscribe((value: string) => this.length = value.length)
  }

  /**
   * Expand input
   */
  onPromptEnter() {
    this.isPromptActive = true;
  }

  /**
   * Collapse input
   */
  onPromptLeave() {
    if (!this.length && !this.isPromptFocused) {
      this.isPromptActive = false;
    }
  }
}
