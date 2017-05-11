# ng-snotify

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

[![Build Status](https://travis-ci.org/artemsky/ng-snotify.svg?branch=master)](https://travis-ci.org/artemsky/ng-snotify)
[![NPM Version](https://img.shields.io/npm/v/ng-snotify.svg)](https://www.npmjs.com/package/ng-snotify)
[![NPM Downloads](https://img.shields.io/npm/dt/ng-snotify.svg)](https://www.npmjs.com/package/ng-snotify)


## Example
https://artemsky.github.io/ng-snotify/

[![snotify.gif](https://gifyu.com/images/snotify.gif)](https://gifyu.com/image/bKu8)
_______

## Installation

To install this library, run:

```bash
$ npm install ng-snotify -S
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SnotifyModule, SnotifyService } from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Import SnotifyModule, also you can try SnotifyModule.forRoot() if you have build errors
    SnotifyModule
  ],
  providers: [SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Add `app-snotify` component to you root component

```xml
<!-- You can now use your library component in app.component.html -->
<app-snotify></app-snotify>
```

Now you should inject `SnotifyService`

```typescript
import {Component, OnInit} from '@angular/core';

// Import SnotifyService
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Inject SnotifyService
  constructor(private snotifyService: SnotifyService) {}

  //You can set global config like this
  ngOnInit() {
    this.snotifyService.setConfig({
      timeout: 30000
    }, {
      newOnTop: false,
    });
  }

  //Hopefuly you can add a toast 
  addToast() {
    this.snotifyService.error('Example error!', 'Here we are', {
      closeOnClick: false
    });
  }

  //You can remove all toasts from the field
  clearToasts() {
    this.snotifyService.clear();
  }
}

```

## Configuration

###### Global Cofig (affects all toasts)

`SnotifyService` has method `setConfig`, wich takes 2 parametrs

1 - Object typeof `SnotifyConfig` or `null`

```typescript
export interface SnotifyConfig {
  timeout?: number; //default: 1500
  showProgressBar?: boolean; //default: true
  type?: SnotifyType; //depends on toast type [success, error, warning, bare, info]
  closeOnClick?: boolean; //default: true
  pauseOnHover?: boolean; //default: true
}
```

2 - Object typeof `SnotifyOptions` or `null`

```typescript
export interface SnotifyOptions {
  maxOnScreen?: number; //default: 8
  newOnTop?: boolean; //default: true
  position?: [SnotifyPosition, SnotifyPosition]; //default: Bottom, Right
  positionOffset?: {horizontal?: string, vertical?: string}; //default: 10px, 10px
}
```

###### Toast Cofig (affects current toast)

You can call toast by calling one of 5 methods
* `success(title: string, body: string, config?: SnotifyConfig)`
* `warning(title: string, body: string, config?: SnotifyConfig)`
* `info(title: string, body: string, config?: SnotifyConfig)`
* `error(title: string, body: string, config?: SnotifyConfig)`
* `bare(title: string, body: string, config?: SnotifyConfig)`
```typescript
snotifyService.success('Example success!', 'Here we are', {
  timeout: 0, // disable timeout,
  showProgressBar: true, // won't affect because of timeout, if timeout set to 0. Progress Bar cannot exist anymore
  closeOnClick: false
  // One important thing: it is not recommended to change the type in all methods except the bare
});
```
All interfaces can be imported from `ng-snotify`

The best place to set global config is `ngOnInit()`

Once your library is imported, you can use its components, interfaces and service in your Angular application:

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [artemsky](mailto:mr.artemsky@gmail.com)
