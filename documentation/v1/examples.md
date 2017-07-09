## Examples

* [Toasts](#toasts)
* [Callbacks](#callbacks)
* [Custom icon](#custom-icon)

### Toasts
#### Simple, Success, Info, Warning, Error
```typescript
this.snotifyService.success('Example title!', 'Example body content', {
      timeout: 2000,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true
    });
```
#### Async

###### Observable
You should pass Promise or Observable of type SnotifyConfig to change some data or do some other actions  
More information how to work with observables - [here](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/create.md)
```typescript
this.snotifyService.async('Example title', 'Example body content',
      Observable.create(observer => {
          setTimeout(() => {
            observer.next({
              body: 'Still loading.....',
            });
            }, 1000);

        // Change toast data
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

          // Complete observer
          observer.complete();
        }, 5000);

          /* Or call error */
          // setTimeout(() => {
          //   observer.error({
          //     title: 'Error',
          //     body: 'Example. Error 404. Service not found',
          //   });
          // }, 6000);

        }
      )
    );
```
###### Promise

```typescript
this.snotifyService.async('Example title', 'Example body content',
      new Promise((resolve, reject) => {
        setTimeout(() => reject(), 1000);
        setTimeout(() => resolve(), 1500);
      })  
    );
```

#### Prompt
```typescript
const id = this.snotifyService.prompt('Example title', 'Example body content', {
      buttons: [
        {text: 'Yes', action: (text) => console.log('Pressed `Yes` button and text entered: ' + text), bold: false},
        {text: 'No', action: () => this.snotifyService.remove(id), bold: true },
      ],
      placeholder: 'This is the example placeholder which you can pass'
    });
```

#### Confirm
```typescript
this.snotifyService.confirm('Example title', 'Example body content', {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      buttons: [
        {text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
        {text: 'No', action: () => console.log('Clicked: No'), bold: true},
      ]
    });
```

### Callbacks

```typescript
 this.snotifyService.onHoverEnter = (toast: SnotifyToast) => {
    console.log('Hover enter', toast);
 };

 this.snotifyService.onHoverLeave = (toast: SnotifyToast) => {
    console.log('Hover leave', toast);
 };
```

### Custom icon
Icon viewport is set to 48x48 pixels.
```typescript
this.snotifyService.simple('Example title!', 'Example body content', {
      timeout: 2000,
      showProgressBar: false,
      closeOnClick: true,
      icon: 'assets/custom-svg.svg'
    });
```

Of course you can pass an url, for example `http://placeholde.it/48x100` (this resource will generate us an image with 48x100 dimension).  
And apply `object-fit` to `.snotify-icon` class in your styles

`styles.css`
```css
.snotify-icon {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center;
}
```
