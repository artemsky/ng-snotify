* [SnotifyService](#snotifyservice)
* * [Methods](#methods)
* * [Callbacks](#callbacks)
* [Enums](#enums)
* * [SnotifyAction](#snotifyaction)
* * [SnotifyPosition](#snotifyposition)
* * [SnotifyType](#snotifytype)
* [Interfaces](#interfaces)
* * [SnotifyConfig](#snotifyconfig)
* * [SnotifyOptions](#snotifyoptions)
* * [SnotifyButton](#snotifybutton)
* * [SnotifyInfo](#snotifyinfo)
* * [Snotify](#snotify)

# SnotifyService
## Methods

### Toasts
`simple(title: string, body: string, config?: SnotifyConfig): number`
> Toast notification of style - *simple*

`success(title: string, body: string, config?: SnotifyConfig): number`
> Toast notification of style - *success*

`info(title: string, body: string, config?: SnotifyConfig): number`
> Toast notification of style - *info*

`warning(title: string, body: string, config?: SnotifyConfig): number`
> Toast notification of style - *warning*

`error(title: string, body: string, config?: SnotifyConfig): number)`
> Toast notification of with style - *error*

`async(title: string, body: string, action: Promise<SnotifyConfig> | Observable<SnotifyConfig>): number`
> Toast notification of style - *info* and loading spinner. It changes style depending on success or error `promise|observable`.  
> You can change displayed data during the loading process using Observable.next()

`confirm(title: string, body: string, config: SnotifyConfig): number`
> Toast notification of style - *confirm* with two buttons(configurable)

`prompt(title: string, body: string, config: SnotifyConfig): number`
> Toast notification of style - *confirm* with two buttons(configurable) and input field

### Other

`setConfig(config: SnotifyConfig, options?: SnotifyOptions): void`
> Set global configuration object

`get(id: number): SnotifyToast`
> Returns `SnotifyToast` object by id

`remove(id?: number, remove?: boolean): void`
> If `id` passed, emits toast remove animation, if `id` & `remove` passed, removes toast from notifications array instantly. If no param passed it is the same as `clear()`

`clear(): void`
> Clear notifications array

## Callbacks

`onInit(toast: SnotifyToast)`
> Emits on toast has been initialized

`onHoverEnter(toast: SnotifyToast)`
> Emits on `mouseenter`

`onHoverLeave(toast: SnotifyToast)`
> Emits on `mouseleave`

`onClick(toast: SnotifyToast)`
> Emits on `click`

`beforeDestroy(toast: SnotifyToast)`
> Emits before toast starts to hide

`afterDestroy(toast: SnotifyToast)`
> Emits after toast has been hidden


# Enums

***

## SnotifyAction

```typescript
  onInit = 3,
  beforeDestroy = 0,
  afterDestroy = 1,
  onClick = 10,
  onHoverEnter = 11,
  onHoverLeave = 12
```

## SnotifyPosition

```typescript
  left_top = 0,
  left_center = 1,
  left_bottom = 2,

  right_top = 3,
  right_center = 4,
  right_bottom = 5,

  center_top = 6,
  center_center = 7,
  center_bottom = 8
```

## SnotifyType

```typescript
  SIMPLE,
  SUCCESS,
  ERROR,
  WARNING,
  INFO,
  ASYNC,
  CONFIRM,
  PROMPT
```


# Interfaces

***

## SnotifyConfig 

> ### timeout?  
**Type:** `Number`  
**Default:** `2000`  
**Description:** Toast timeout in milliseconds. 0 - Disable timeout

> ### showProgressBar?
**Type:** `Boolean`  
**Default:** `true`  
**Description:** Enable/Disable progress bar. Disabled if timeout is 0.

> ### type?
**Type:** [SnotifyType](#snotifytype)  
**Default:**: Depends on toast type - success | async | error | etc...  
**Description:** Type of toast, affects toast style. It's not recommended to change it.

> ### closeOnClick?
**Type:** `Boolean`  
**Default:** `true`  
**Description:** Enable/Disable toast close by clicking on it

> ### pauseOnHover?
**Type:** `Boolean`  
**Default:** `true`  
**Description:** Enable/Disable pause on mouse enter

> ### buttons?
**Type:** [[SnotifyButton](#snotifybutton), [SnotifyButton](#snotifybutton)] | [[SnotifyButton](#snotifybutton)]  
**Default:**  
```typescript
[ 
  {
    text: 'Ok',
    action: null,
    bold: true
  }, 
  {
    text: 'Cancel',
    action: null,
    bold: false
  } 
]
```  
**Description:** Buttons config for Confirmation & Prompt types


> ### placeholder?
**Type:** `String`  
**Default:** Default: `Enter answer here...`  
**Description:** Placeholder for Prompt toast

> ### titleMaxLength?
**Type:** `Number`  
**Default:** `16`  
**Description:** Toast title maximum length

> ### bodyMaxLength?
**Type:** `Number`  
**Default:** `150`  
**Description:** Toast body maximum length

> ### icon?
**Type:** `string`  
**Default:** null  
**Description:** Custom icon url/path.

> ### backdrop?
**Type:** `number`  
**Default:** -1  
**Description:** Backdrop opacity. Range - `0.0 - 1.0`. Disabled `-1` 

***
## SnotifyOptions

> ### maxOnScreen?
**Type:** `Number`  
**Default:** `8`  
**Description:** Max toast items on screen.  
For example you want to display 3 toasts max at the time. But for some purposes your system calls it 10 times.  
With this option, 3 toast will be shown. And after each of it will disappear, new toast from the queue will be shown.

> ### newOnTop?
**Type:** `Boolean`  
**Default:** `true`  
**Description:** Should new items come from top or bottom side.  
This option created for styling purposes.  
For example, if your toast position is TOP-RIGHT. It's not very nice, when items comes from top and pulls down all other toasts

> ### position?
**Type:** [SnotifyPosition](#snotifyposition)  
**Default:** `right_bottom`  
**Description:** Toasts position on screen

> ### transition?
**Type:** `Number`  
**Default:** `400`  
**Description:** Transition on toast show/hide animation

> ### maxHeight?
**Type:** `Number`  
**Default:** `300`  
**Description:** Toast maximum height in pixels

***

## SnotifyButton

> ### text
**Type:** `String`  
**Default:** `2000`  
**Description:** Toast timeout in milliseconds. 0 - Disable timeout

> ### action?: (text?: string) => void
**Type:** `Callback`  
**Default:** `null`  
**Description:** Action which will be called after button click.

> ### bold?
**Type:** `Boolean`  
**Default:** Yes - `true` | No - `false`  
**Description:** Make button text bold or not

***

## SnotifyInfo

> ### action
**Type:** [SnotifyAction](#snotifyaction)  
**Description:** Toast lifecycle action (onInit, onDestroy, etc...)

> ### toast
**Type:** [SnotifyToast](#snotify)  
**Description:** Toast which triggered this action

***

## Snotify

> ### title
**Type:** `String`  
**Description:** Toast Title

> ### body
**Type:** `String`  
**Description:** Toast message

> ### config?
**Type:** [SnotifyConfig](#snotifyconfig)  
**Description:** Toast configuration object


_____
All interfaces can be imported from `ng-snotify` 
