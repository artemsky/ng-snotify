import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SnotifyService, SnotifyToast, SnotifyPosition} from 'ng-snotify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
    this.snotifyService.setConfig({
      timeout: 3000,
      titleMaxLength: 14,
      bodyMaxLength: 40
    }, {
      newOnTop: false,
      position: this.position,
      maxHeight: 500
    });

    this.snotifyService.onInit = (toast: SnotifyToast) => {
      console.log('on Init', toast);
      /*
       At each callback you can change toast data directly.
       toast.title = "New Title"
       toast.body = "Some new value"
       */
    };

    this.snotifyService.onHoverEnter = (toast: SnotifyToast) => {
      console.log('Hover enter', toast);
    };

    this.snotifyService.onHoverLeave = (toast: SnotifyToast) => {
      console.log('Hover leave', toast);
    };

    this.snotifyService.onClick = (toast: SnotifyToast) => {
      console.log('Clicked', toast);
    };

    this.snotifyService.beforeDestroy = (toast: SnotifyToast) => {
      console.log('Before Destroy', toast);
    };

    this.snotifyService.afterDestroy = (toast: SnotifyToast) => {
      console.log('After Destroy', toast);
    };

    this.snotifyService.onInput = (toast: SnotifyToast, value: string) => {
      console.log('On Input', value, toast);
    };
  }

  /*
  Change global configuration
   */
  setGlobal() {
    this.snotifyService.setConfig({
      bodyMaxLength: this.bodyMaxLength,
      titleMaxLength: this.titleMaxLength,
      backdrop: this.backdrop
    }, {
      newOnTop: this.newTop,
      position: this.position,
      maxOnScreen: this.dockMax,
      maxAtPosition: this.blockMax,
      maxHeight: this.maxHeight
    });
  }

  onSuccess() {
    this.setGlobal();
    this.snotifyService.success(this.body, this.title, {
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    });
  }

  onInfo() {
    this.setGlobal();
    this.snotifyService.info(this.body, this.title, {
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    });
  }
  onError() {
    this.setGlobal();
    this.snotifyService.error(this.body, this.title, {
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    });
  }
  onWarning() {
    this.setGlobal();
    this.snotifyService.warning(this.body, this.title, {
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    });
  }
  onSimple() {
    this.setGlobal();

    // const icon = `assets/custom-svg.svg`;
    const icon = `https://placehold.it/48x100`;

    this.snotifyService.simple(this.body, this.title, {
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover,
      icon: icon
    });
  }

  onAsyncLoading() {
    this.setGlobal();
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
        }, 5000);

          // setTimeout(() => {
          //   observer.error({
          //     title: 'Error',
          //     body: 'Example. Error 404. Service not found',
          //   });
          // }, 6000);

        }
      )
    );
  }

  onConfirmation() {
    this.setGlobal();
    /*
    Here we pass an buttons array, which contains of 2 element of type SnotifyButton
     */
    const id = this.snotifyService.confirm(this.body, this.title, {
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover,
      buttons: [
        {text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
        {text: 'No', action: () => console.log('Clicked: No')},
        {text: 'Later', action: (toastId) => {console.log('Clicked: Later'); this.snotifyService.remove(toastId); } },
        {text: 'Close', action: () => {console.log('Clicked: Close'); this.snotifyService.remove(id); }, bold: true},
      ]
    });
  }

  onPrompt() {
    this.setGlobal();
    /*
     Here we pass an buttons array, which contains of 2 element of type SnotifyButton
     At the action of the first button we can get what user entered into input field.
     At the second we can't get it. But we can remove this toast
     */
    const id = this.snotifyService.prompt(this.body, this.title, {
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover,
      buttons: [
        {text: 'Yes', action: (toastId, text) => console.log('Said Yes: ' + text + ' ID: ' + toastId)},
        {text: 'No', action: (toastId, text) => { console.log('Said No: ' + text); this.snotifyService.remove(id); }},
      ],
      placeholder: 'This is the example placeholder which you can pass' // Max-length = 40
    });
  }

  onHtml() {
    this.setGlobal();

    this.snotifyService.html(`<div class="snotifyToast__title" *ngIf="toast.title"><b>Html Bold Title</b></div>
    <div class="snotifyToast__body"><i>Html</i> <b>toast</b> <u>content</u></div> `);
  }


  onClear() {
    this.snotifyService.clear();
  }

}
