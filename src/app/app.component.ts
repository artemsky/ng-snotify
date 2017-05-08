import {Component, OnInit} from '@angular/core';
import {SnotifyService} from './snotify/snotify/snotify.service';
import {Toast} from './snotify/snotify/toast/toast.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private snotifyService: SnotifyService) {}

  ngOnInit() {
    this.snotifyService.setConfig({
      showProgressBar: true
    });
  }

  addToast() {
    this.snotifyService.add(new Toast('Test Title', 'Test content lalala', 10000));
  }

  clearToasts() {
    this.snotifyService.clear();
  }

}
