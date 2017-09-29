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
> Toast configuration object


## SnotifyButton

### text
- type: `string`   
> Toast timeout in milliseconds. 0 - Disable timeout

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
- type: `{ [key: SnotifyType]: SnotifyConfig }`
> Toast type default config  
> Example can be found in [options](options.md#setting-default-configuration) defaults


### SnotifyStyles

### simple
- type: [SnotifyType](types.md#snotifytype)

### success
- type: [SnotifyType](types.md#snotifytype)

### error
- type: [SnotifyType](types.md#snotifytype)

### warning
- type: [SnotifyType](types.md#snotifytype)

### info
- type: [SnotifyType](types.md#snotifytype)

### async
- type: [SnotifyType](types.md#snotifytype)

### confirm
- type: [SnotifyType](types.md#snotifytype)

### prompt
- type: [SnotifyType](types.md#snotifytype)


