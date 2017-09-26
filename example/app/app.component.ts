import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SnotifyService, SnotifyToast, SnotifyPosition} from 'ng-snotify';
import {SnotifyConfig} from '../../src/snotify/interfaces/SnotifyToastConfig.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  style = 'material';
  title = 'Snotify title!';
  body = 'Lorem ipsum dolor sit amet!';
  timeout = 3000;
  position: SnotifyPosition = SnotifyPosition.right_bottom;
  progressBar = true;
  closeClick = true;
  newTop = true;
  backdrop = -1;
  dockMax = 8;
  blockMax = 6;
  pauseHover = true;
  maxHeight = 300;
  titleMaxLength = 15;
  bodyMaxLength = 80;

  constructor(private snotifyService: SnotifyService) {}

  /*
  Change global configuration
   */
  getConfig(): SnotifyConfig {
    return {
      bodyMaxLength: this.bodyMaxLength,
      titleMaxLength: this.titleMaxLength,
      backdrop: this.backdrop,
      newOnTop: this.newTop,
      position: this.position,
      maxOnScreen: this.dockMax,
      maxAtPosition: this.blockMax,
      maxHeight: this.maxHeight,
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    };
  }

  onSuccess() {
    this.snotifyService.success(this.body, this.title, this.getConfig())
    this.snotifyService.success(this.body, this.title, this.getConfig())
  }
  onInfo() {
    this.snotifyService.info(this.body, this.title, this.getConfig());
  }
  onError() {
    this.snotifyService.error(this.body, this.title, this.getConfig());
  }
  onWarning() {
    this.snotifyService.warning(this.body, this.title, this.getConfig());
  }
  onSimple() {

    // const icon = `assets/custom-svg.svg`;
    const icon = `https://placehold.it/48x100`;

    this.snotifyService.simple(this.body, this.title, {
      ...this.getConfig(),
      icon: icon
    });
  }

  onAsyncLoading() {
    const errorAction = Observable.create(observer => {
      setTimeout(() => {
        observer.error({
          title: 'Error',
          body: 'Example. Error 404. Service not found',
        });
      }, 2000);
    });

    const successAction = Observable.create(observer => {
      setTimeout(() => {
        observer.next({
          body: 'Still loading.....',
        });
      }, 2000);

      setTimeout(() => {
        observer.next({
          title: 'Success',
          body: 'Example. Data loaded!',
          config: {
            closeOnClick: true,
            timeout: 5000,
            showProgressBar: true
          }
        });
        observer.complete();
      }, 5000);
    });

    /*
      You should pass Promise or Observable of type Snotify to change some data or do some other actions
      More information how to work with observables:
      https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/create.md
     */
    const {timeout, ...config} = this.getConfig(); // Omit timeout
    this.snotifyService.async('This will resolve with error', 'Async', errorAction, config);
    this.snotifyService.async('This will resolve with success', successAction, config);
    this.snotifyService.async('Called with promise', 'Error async',
      new Promise((resolve, reject) => {
        setTimeout(() => reject({
          title: 'Error!!!',
          body: 'We got an example error!'
        }), 1000);
        setTimeout(() => resolve(), 1500);
      }));
  }

  onConfirmation() {
    /*
    Here we pass an buttons array, which contains of 2 element of type SnotifyButton
     */
    const {timeout, closeOnClick, ...config} = this.getConfig(); // Omit props what i don't need
    this.snotifyService.confirm(this.body, this.title, {
      ...config,
      buttons: [
        {text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
        {text: 'No', action: () => console.log('Clicked: No')},
        {text: 'Later', action: (id) => {console.log('Clicked: Later'); this.snotifyService.remove(id); } },
        {text: 'Close', action: (id) => {console.log('Clicked: Close'); this.snotifyService.remove(id); }, bold: true},
      ]
    });
  }

  onPrompt() {
    /*
     Here we pass an buttons array, which contains of 2 element of type SnotifyButton
     At the action of the first button we can get what user entered into input field.
     At the second we can't get it. But we can remove this toast
     */
    const {timeout, closeOnClick, ...config} = this.getConfig(); // Omit props what i don't need
    const toast = this.snotifyService.prompt(this.body, this.title, {
      ...config,
      buttons: [
        {text: 'Yes', action: (id, text) => console.log(toast.valid = !toast.valid)
        },
        {text: 'No', action: (id, text) => { console.log('Said No: ' + text); this.snotifyService.remove(id); }},
      ],
      placeholder: 'This is the example placeholder which you can pass' // Max-length = 40
    });
  }

  onHtml() {
    const html = `<div class="snotifyToast__title"><b>Html Bold Title</b></div>
    <div class="snotifyToast__body"><i>Html</i> <b>toast</b> <u>content</u></div>`;
    this.snotifyService.html(html, this.getConfig());
  }


  onClear() {
    this.snotifyService.clear();
  }

}
