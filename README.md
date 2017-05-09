[![Build Status](https://travis-ci.org/artemsky/ng-snotify.svg?branch=master)](https://travis-ci.org/artemsky/ng-snotify)
[![NPM Version](https://img.shields.io/npm/v/ng-snotify.svg)](https://www.npmjs.com/package/ng-snotify)
[![NPM Downloads](https://img.shields.io/npm/dt/ng-snotify.svg)](https://www.npmjs.com/package/ng-snotify)

# ng-snotify

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
    this.snotifyService.success('Example success!', 'Here we are');
    this.snotifyService.error('Example error!', 'Here we are', {
      closeOnClick: false
    });
    this.snotifyService.warning('Example warning!', 'Here we are');
    this.snotifyService.info('Example info!', 'Here we are');
    this.snotifyService.bare('Example bare!', 'Here we are');
  }

  //You can remove all toasts from the field
  clearToasts() {
    this.snotifyService.clear();
  }
}

```

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
