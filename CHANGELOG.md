## Change Log

### v4.2.0
- add Angular 5+ support

### v4.1.0
- escape SVG icons bug with Safari, Firefox
- add [iconClass](https://artemsky.github.io/ng-snotify/documentation/api/options.html#iconclass)

### v4.0.2
- fix toast reposition if position changed in async method
- bump dependencies


### v4.0.1
- fix css icons width & height
- update doc

### v4.0.0
- **Breaking changes -** [Look migration guide](https://artemsky.github.io/ng-snotify/documentation/essentials/upgrade.html)
- **Features**
  - [New Documentation](https://artemsky.github.io/ng-snotify/documentation) based on gitbook
  - Prompt input [validation](https://artemsky.github.io/ng-snotify/documentation/essentials/examples.html#prompt--validation)
  - New [callbacks](https://artemsky.github.io/ng-snotify/documentation/api/callbacks.html) with jQuery-like syntax
  - Reworked toast arguments ordering based on - see [function signatures](https://artemsky.github.io/ng-snotify/documentation/api/snotify.html)
  - Replaced all animations and icons to styles (now it more customizable up to you)
  - Add toast [default configuration](https://artemsky.github.io/ng-snotify/documentation/api/options.html)
  - Reworked toast `timeout` interval - now based on `requestAnimationFrame`
  - Now 1kb lighter :)

### v3.0.1
  - fix invisible backdrop blinking
  
### v3.0.0
  - Removed style encapsulation. Now you can style component directly in your global styles.scss(css) without using `/deep/` directive. 
  - Added 3 themes. Now styles are outside of the component. You should read [migration guide](documentation/v2-to-v3-migration-guide.md)
  - Added the ability to simultaneously display toasts in different positions of the screen
  - Added `maxAtPosition` option, so you can control max toast count at the position
  - update angular 4.3.4 -> 4.3.6 (and other dev dependencies)

### v2.2.0
  - thx [ganeshkantu](https://github.com/artemsky/ng-snotify/issues/19), now you can pass HTML into toasts within config object, or use new *html* toast type
  - update angular 4.3.0 -> 4.3.4 (and other dev dependencies)

### v2.1.0
  - optimize components rerender
  - update angular 4.3.0 -> 4.3.1 (and other dev dependencies)

### v2.0.3
  - fix horizontal center backdrop thx [ktriek](https://github.com/artemsky/ng-snotify/pull/18)
  - update angular 4.2.6 -> 4.3.0 (and other dev dependencies)

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
- add toast `titleMaxLeght` and `bodyMaxLeght` to `SnotifyToastConfig`
- add toast `maxHeight` to `SnotifyOptions` ([#7](https://github.com/artemsky/ng-snotify/issues/7))
- add body to **prompt** type and replace input preview text wih new option `placeholder` of `SnotifyToastConfig` type

### v1.0.0

- First release
