# ng-snotify

[![Build Status](https://travis-ci.org/artemsky/ng-snotify.svg?branch=master)](https://travis-ci.org/artemsky/ng-snotify)
[![NPM Version](https://img.shields.io/npm/v/ng-snotify.svg)](https://www.npmjs.com/package/ng-snotify)
[![NPM Downloads](https://img.shields.io/npm/dt/ng-snotify.svg)](https://www.npmjs.com/package/ng-snotify)


## Example
https://artemsky.github.io/ng-snotify/


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

#### Global Cofig (affects all toasts)

`SnotifyService` has method `setConfig`, wich takes 2 parametrs

1 - Object typeof `SnotifyConfig` or `null`

```typescript
export interface SnotifyConfig {
  timeout?: number;
  showProgressBar?: boolean;
  type?: SnotifyType;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  buttons?: [SnotifyButton, SnotifyButton] | [SnotifyButton];
}
```

2 - Object typeof `SnotifyOptions` or `null`

```typescript
export interface SnotifyOptions {
  maxOnScreen?: number;
  newOnTop?: boolean;
  position?: SnotifyPosition;
  transition?: number;
}
```

#### Toast Config (affects current toast)

You can call toast by calling one of this methods from `SnotifyService` instance
* `success(title: string, body: string, config?: SnotifyConfig): number`
* `info(title: string, body: string, config?: SnotifyConfig): number`
* `warning(title: string, body: string, config?: SnotifyConfig): number)`
* `error(title: string, body: string, config?: SnotifyConfig): number)`
* `simple(title: string, body: string, config?: SnotifyConfig): number `
* `confirm(title: string, body: string, config: SnotifyConfig): number)`
* `prompt(title: string, body: string, config: SnotifyConfig): number)`
* `async(title: string, body: string, config: SnotifyConfig): number)`

All toast methods return `id`, so you can remove toast by calling `snotifyService.remove(id)`

If you call `snotifyService. remove()` without id, it will affect all toasts, the same is `snotifyService.clear()`

###### Here is an example
```typescript
const id = snotifyService.simple('Example title!', 'Example body message', {
      timeout: 0, // disable timeout,
      showProgressBar: true, // won't affect because of timeout, if timeout set to 0. Progress Bar cannot exist anymore
      closeOnClick: false,
      pauseOnHover: true // won't affect because of timeout
    });

this.snotifyService.remove(id)
```

###### Callbacks (affects all toast)
There are few lifecycle hooks
 - `onInit` - when toast has been shown
 - `onClick` - when toast has been clicked
 - `onHoverEnter` - on mouse enter
 - `onHoverLeave` - on mouse leave
 - `beforeDestroy` - before toast destroyed
 - `afterDestroy` - after toast has been destroyed
You can set it with `snotifyService`
```typescript
this.snotifyService.onInit = (toast: SnotifyToast) => {
      // Do something here
    };
```
All interfaces can be imported from `ng-snotify`

The best place to set global config is `ngOnInit()`

# Documentation and Examples

Documentation - [here](https://artemsky.github.io/ng-snotify/documentation/injectables/SnotifyService.html).

Examples - [here](https://github.com/artemsky/ng-snotify/blob/develop/src/app/app.component.ts)

## Development

Go to develop branch and use angular-cli

## License

MIT © [artemsky](mailto:mr.artemsky@gmail.com)

## Change Log

### v1.1.2

- fix async toast ([#8](https://github.com/artemsky/ng-snotify/issues/8))
- add `truncate` pipe
- add toast `titleMaxLeght` and `bodyMaxLeght` to `SnotifyConfig`
- add toast `maxHeight` to `SnotifyOptions` ([#7](https://github.com/artemsky/ng-snotify/issues/7))
- add body to **prompt** type and replace input preview text wih new option `placeholder` of `SnotifyConfig` type

### v1.0.0

- First release
