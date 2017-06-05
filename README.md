# ng-snotify

[![Build Status](https://travis-ci.org/artemsky/ng-snotify.svg?branch=master)](https://travis-ci.org/artemsky/ng-snotify)
[![NPM Version](https://img.shields.io/npm/v/ng-snotify.svg)](https://www.npmjs.com/package/ng-snotify)
[![NPM Downloads](https://img.shields.io/npm/dt/ng-snotify.svg)](https://www.npmjs.com/package/ng-snotify)


## Example
https://artemsky.github.io/ng-snotify/


_______

## Installation

###### NPM 5
`npm install ng-snotify`
###### NPM 4
`npm install ng-snotify --save`


#### Import Module
Import SnotifyModule, also you can try SnotifyModule.forRoot() if you have build errors  
And provide SnotifyService
```typescript
// Import your library
import { SnotifyModule, SnotifyService } from 'ng-snotify';

@NgModule({
  imports: [
    BrowserModule,
    SnotifyModule
  ],
  providers: [SnotifyService]
})
export class AppModule { }
```

#### Add selector
Add `app-snotify` component to you root component

```html
<app-snotify></app-snotify>
```
#### Dependency injection
Now you should inject `SnotifyService`

```typescript
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private snotifyService: SnotifyService) {}
}

```

## Documentation and Examples
All interfaces can be imported from `ng-snotify`  

Api - [here](https://github.com/artemsky/ng-snotify/wiki/API)

Auto-Documentation - [here](https://artemsky.github.io/ng-snotify/documentation/injectables/SnotifyService.html).

Examples - [here](https://github.com/artemsky/ng-snotify/wiki/API#examples)

Example application source - [here](https://github.com/artemsky/ng-snotify/tree/master/example/app)

## Development

- `npm run build`
- `cd src`
- `npm link`
- `cd ..`
- `npm link ng-snotify`
- Run component build:watch `npm run build:watch`
- Run example app `ng serve --open`
- open `localhost:4200` in your browser
- go to `./src`
- Start developing!

## Known issues

- Compodoc stopped generate interfaces - ([source](https://github.com/jvandemo/generator-angular2-library/issues/112))

## License

MIT © [artemsky](mailto:mr.artemsky@gmail.com)

## Change Log

### v1.1.4

- remove min-height ([#11](https://github.com/artemsky/ng-snotify/issues/11))
- fix max-height animation
- change 2-branches developing (develop\master) onto 1 branch (master)
- Upgrade example app **angular cli** 1.0.2 -> 1.1.0
- Upgrade **yeomen generator-angular2-library** 10.0.0 -> 10.2.2

### v1.1.3

- fix TruncatePipe error ([#9](https://github.com/artemsky/ng-snotify/issues/9))
- fix box-sizing

### v1.1.2

- fix async toast ([#8](https://github.com/artemsky/ng-snotify/issues/8))
- add `truncate` pipe
- add toast `titleMaxLeght` and `bodyMaxLeght` to `SnotifyConfig`
- add toast `maxHeight` to `SnotifyOptions` ([#7](https://github.com/artemsky/ng-snotify/issues/7))
- add body to **prompt** type and replace input preview text wih new option `placeholder` of `SnotifyConfig` type

### v1.0.0

- First release

## Future

- Write good documentation
- rename component to `ng2-snotify` due semantic purpose 
- Make icons configurable 
- Make toast styling configurable
