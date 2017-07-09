1. Change `<app-snotify></app-snotify>` to `<ng-snotify></ng-snotify>`
2. All toast methods now has different param order. Swap `title`, with `body`
```typescript
simple(title: string, body?: string, config?: SnotifyConfig)
```
```typescript
simple(body: string, title?: string, config?: SnotifyConfig)
```

This change made because of less code to start purpouse.  
Now minimal amount of code is `simple('Some text here')`

3. Take a look at your configurations
* Global options
**Transition removed**
Integrated animations changed with animate.css. More about - [here](v2/animations.md)
* Buttons  
Now there are 2 action params, where 1st = toast id. 2nd - text (if it's the prompt toast)
```typescript
[
  {text: 'Ok', action: null, bold: true},
  {text: 'Cancel', action: (id, text) => this.remove(id), bold: false},
]
```


