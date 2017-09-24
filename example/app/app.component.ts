import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SnotifyService, SnotifyToast, SnotifyPosition} from 'ng-snotify';
import {SnotifyConfig} from '../../src/snotify/interfaces/SnotifyConfig.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  style = 'material';
  title = 'Snotify title!';
  body = 'Lorem ipsum dolor sit amet!';
  timeout = 3000;
  position: SnotifyPosition = SnotifyPosition.right_bottom;
  progressBar = true;
  closeClick = true;
  newTop = true;
  backdrop = -1;
  dockMax = 6;
  blockMax = 3;
  pauseHover = true;
  maxHeight = 300;
  titleMaxLength = 15;
  bodyMaxLength = 80;

  constructor(private snotifyService: SnotifyService) {}

  ngOnInit() {

    // this.snotifyService.onInit = (toast: SnotifyToast) => {
    //   console.log('on Init', toast);
    //   /*
    //    At each callback you can change toast data directly.
    //    toast.title = "New Title"
    //    toast.body = "Some new value"
    //    */
    // };
    //
    // this.snotifyService.onHoverEnter = (toast: SnotifyToast) => {
    //   console.log('Hover enter', toast);
    // };
    //
    // this.snotifyService.onHoverLeave = (toast: SnotifyToast) => {
    //   console.log('Hover leave', toast);
    // };
    //
    // this.snotifyService.onClick = (toast: SnotifyToast) => {
    //   console.log('Clicked', toast);
    // };
    //
    // this.snotifyService.beforeDestroy = (toast: SnotifyToast) => {
    //   console.log('Before Destroy', toast);
    // };
    //
    // this.snotifyService.afterDestroy = (toast: SnotifyToast) => {
    //   console.log('After Destroy', toast);
    // };
    //
    // this.snotifyService.onInput = (toast: SnotifyToast, value: string) => {
    //   console.log('On Input', value, toast);
    // };
  }

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
      .on('init', () => {
        alert(1);
      }).on('click', () => {
        alert(2);
      }).on('mouseenter', () => {
        alert(3);
      })
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
    this.snotifyService.async(this.body, this.title,
      /*
      You should pass Promise or Observable of type SnotifyConfig to change some data or do some other actions
      More information how to work with observables:
      https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/create.md
       */

      // new Promise((resolve, reject) => {
      //   setTimeout(() => reject(), 1000);
      //   setTimeout(() => resolve(), 1500);
      // })
      Observable.create(observer => {
          setTimeout(() => {
            observer.next({
              body: 'Still loading.....',
            });
            }, 1000);

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
        }, 50000);

          // setTimeout(() => {
          //   observer.error({
          //     title: 'Error',
          //     body: 'Example. Error 404. Service not found',
          //   });
          // }, 6000);

        },
        this.getConfig()
      )
    );
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
    const html = `<div class="snotifyToast__title" *ngIf="toast.title"><b>Html Bold Title</b></div>
    <div class="snotifyToast__body"><i>Html</i> <b>toast</b> <u>content</u></div>`;
    this.snotifyService.html(html, this.getConfig());
  }


  onClear() {
    this.snotifyService.clear();
  }

}
