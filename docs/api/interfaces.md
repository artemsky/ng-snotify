# Interfaces


### Snotify

### title
- type: `string`  
> Toast title

### body
- type: `string`  
> Toast content

### config
- type: [SnotifyToastConfig](options.md/#snotifytoastconfig)  
> Toast configuration object

### html
- type: `string` | [SafeHtml](https://angular.io/api/platform-browser/SafeHtml)  
> Toast html content inside `.snotifyToast__inner`


## SnotifyButton

### text
- type: `string`   
> Button text

### action
- type: `function` 
  
  Signature:
  
    ```
    (
      toast: SnotifyToast
    ) => void
    ```
   
> Callback action which will be called on button click.  
> Receive [SnotifyToast](model.md#snotifytoast)

### bold
- type: `boolean`  
> Should button text be bold or not


### SnotifyAnimate

### enter
- type: `string`  
> In animation name

### exit
- type: `string`  
> Out animation name

### time
- type: `number`   
> Animation time in ms


### SnotifyDefaults

### global
- type: [SnotifyGlobalConfig](options.md#snotifyglobalconfig)
> Notifications dock config

### toast
- type: [SnotifyToastConfig](options.md/#snotifytoastconfig)
> Toast config

### type
- type: `{ [key: SnotifyTypeType]: SnotifyToastConfig }`
> Toast type default config  
> Example can be found in [options](options.md#setting-default-configuration) defaults


### SnotifyStyles
> Append snotify-${name} class name to snotify element

### simple
- type: [SnotifyTypeType](types.md#snotifytype)

### success
- type: [SnotifyTypeType](types.md#snotifytype)

### error
- type: [SnotifyTypeType](types.md#snotifytype)

### warning
- type: [SnotifyTypeType](types.md#snotifytype)

### info
- type: [SnotifyTypeType](types.md#snotifytype)

### async
- type: [SnotifyTypeType](types.md#snotifytype)

### confirm
- type: [SnotifyTypeType](types.md#snotifytype)

### prompt
- type: [SnotifyTypeType](types.md#snotifytype)


