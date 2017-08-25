# Custom Styling

> ###### Note. I'am using `scss` syntax

According to Angular [component styling](https://angular.io/docs/ts/latest/guide/component-styles.html). We can override component our component styles.

You can override styles by applying `:host /deep/` directive before each rule. And of course, to override style you should add `!important` flag at the end of each rule.

## Example

```scss
$simple-bg: lighten(#ffffff, 15%);
$simple-color: lighten(#000000, 15%);
$simple-progressBar: lighten(#c7c7c7, 15%);
$simple-progressBarPercentage: lighten(#4c4c4c, 15%);

:host /deep/ .snotify-simple {
  background-color: $simple-bg !important;
  .snotifyToast__progressBar {
    background-color: $simple-progressBar !important;
  }
  .snotifyToast__progressBar__percentage {
    background-color: $simple-progressBarPercentage !important;
  }
  .snotifyToast__title,
  .snotifyToast__body {
    color: $simple-color !important;
  }
}
```

One changeable thing here is `.snotify-simple` where **simple** is the type of a toast.
So you can swap it to change toast type target.

> **Important! Types are lowercase**  
> You can find all types in [SnotifyType](api.md#snotifytype) interface

All types has the same structure except **prompt**. Because it has no progress bar


```scss
:host /deep/ .snotify-prompt {
  background-color: $prompt-bg !important;
  .snotifyToast__body {
    color: $prompt-color !important;
  }
}

```

If you want to change toast show/hide animation.
Please, you have 2 classes `.snotifyToast-show` and `.snotifyToast-remove`.
```scss
:host /deep/ .snotifyToast-show {
  transform: translate(0, 0) !important;
  opacity: 1 !important;
}

:host /deep/ .snotifyToast-remove {
  max-height: 0 !important;
  overflow: hidden !important;
  transform: translate(0, 50%) !important;
  opacity: 0 !important;
}
```
### Full example
Import **[snotify-override.scss](https://github.com/artemsky/ng-snotify/blob/v2/example/app/snotify-override.scss)** in the **[app.component.scss](https://github.com/artemsky/ng-snotify/blob/v2/example/app/app.component.scss#L3)** example app

###### If you want to dive deeper, and override more, you can find look at default styling at [source](https://github.com/artemsky/ng-snotify/blob/v2/src/snotify) `**/*.scss` files
