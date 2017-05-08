import {Component, OnInit} from '@angular/core';
import {SnotifyService} from './snotify/snotify/snotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private snotifyService: SnotifyService) {}

  ngOnInit() {
    this.snotifyService.setConfig({
      timeout: 30000
    }, {
      newOnTop: true
    });
  }

  addToast() {
    this.snotifyService.success('Super title!', 'Here we are');
    this.snotifyService.error('Super title!', 'Here we are', {
      closeOnClick: true
    });
    this.snotifyService.warning('Super title!', 'Here we are');
    this.snotifyService.info('Super title!', 'Here we are');
    this.snotifyService.bare('Super title!', 'Here we are');
  }

  clearToasts() {
    this.snotifyService.clear();
  }

}
