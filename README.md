# ng-snotify

[![Build Status](https://travis-ci.org/artemsky/ng-snotify.svg?branch=master)](https://travis-ci.org/artemsky/ng-snotify)
[![NPM Version](https://img.shields.io/npm/v/ng-snotify.svg)](https://www.npmjs.com/package/ng-snotify)
[![NPM Downloads](https://img.shields.io/npm/dt/ng-snotify.svg)](https://www.npmjs.com/package/ng-snotify)


## Example
https://artemsky.github.io/ng-snotify/


## Features

- 8 types of toast notifications (async, confirm, prompt and more...)
- Many config options (icons, backdrop, timeout, position and much more)
- Custom styling
- Custom css animations
- Callbacks

![Snotify Gif](https://thumbs.gfycat.com/ReliableReflectingFireant-size_restricted.gif)

## Installation

###### NPM 5
`npm install ng-snotify`

###### yarn
`yarn add ng-snotify`

## Documentation and Examples

Documentation - [here](https://github.com/artemsky/ng-snotify/tree/master/documentation)  
Example application source - [here](https://github.com/artemsky/ng-snotify/tree/master/example/app)  
Auto-Documentation - [here](https://artemsky.github.io/ng-snotify/documentation/index.html)  

## License

MIT © [artemsky](mailto:mr.artemsky@gmail.com)

## Change Log

### v2.0.3
  - fix horizontal center backdrop thx [ktriek](https://github.com/artemsky/ng-snotify/pull/18)
  - update angular 4.2.6 -> 4.3.0
  - update other dependencies

### v2.0.0
- **Breaking changes -** [Look migration guide](https://github.com/artemsky/ng-snotify/tree/master/documentation/v1-to-v2-migration-guide.md)
- **Features**
  - Now unlimited amount of buttons.
  - New [callback](https://github.com/artemsky/ng-snotify/tree/master/documentation/v2/api.md#callbacks) `onInput` for **prompt** toast
  - reduce start code amount
  - add custom [animations](https://github.com/artemsky/ng-snotify/tree/master/documentation/v2/animations.md)
- **Fixes**
  - rewrite components. Now more optimized. Divided into separate components.
  - Optimized for AOT build in right way.
  - rewrite [documentation](https://github.com/artemsky/ng-snotify/tree/master/documentation)
  - add few test in example app
  - update dependencies
    - Auto-documentation add - Interfaces (thx @compodoc/compodoc)
    - Auto-documentation add - Default values (thx @compodoc/compodoc)


### v1.4.0

- add backdrop ([#15](https://github.com/artemsky/ng-snotify/issues/15))
- fix @compodoc/compodoc inteface generator - [source 1](https://github.com/compodoc/compodoc/issues/198)
[source 2](https://github.com/jvandemo/generator-angular2-library/issues/112)

### v1.3.0

- add **Custom Styling** - [Read more](https://github.com/artemsky/ng-snotify/wiki/Custom-Styling)
- fix max-height collapsing closeOnClick

### v1.2.0

- add custom icons [Wiki](https://github.com/artemsky/ng-snotify/wiki/API#custom-icon)  
You can see an example of custom icon by calling *Simple toast* in the example app

### v1.1.7

- fix **AOT** compilation ([#13](https://github.com/artemsky/ng-snotify/issues/13))

### v1.1.6

- Add callback text when **No** button pressed (Prompt)
- Improve documentation
- Create wiki

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
