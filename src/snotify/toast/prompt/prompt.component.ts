import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output,
  ViewEncapsulation
} from '@angular/core';
import {uuid} from '../../utils';

@Component({
  selector: 'ng-snotify-prompt',
  templateUrl: './prompt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

/**
 * Prompt component. Part of PROMPT type
 */
export class PromptComponent implements OnInit {
  /**
   * Get PROMPT placeholder
   */
  @Input() placeholder: string;
  /**
   * Emmit prompt input value
   */
  @Output() valueChanged = new EventEmitter<string>();

  /**
   * Input length, needed for collapse check
   */
  length: number;
  /**
   * Toast id
   */
  id: number;
  /**
   * Is PROMPT focused
   * @type {boolean}
   */
  isPromptFocused = false;

  constructor() {
    this.id = uuid();
  }

  /**
   * Subscribe on input value change
   */
  ngOnInit() {
    this.valueChanged.subscribe((value: string) => this.length = value.length)
  }
}
