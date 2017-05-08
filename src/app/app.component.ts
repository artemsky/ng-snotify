import {Component} from '@angular/core';
import {SnotifyService} from './snotify/snotify/snotify.service';
import {Toast} from './snotify/snotify/toast/toast.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private snotifyService: SnotifyService) {}

  addToast() {
    this.snotifyService.add(new Toast('Test Title', 'Test content lalala', 5000));
  }

}
