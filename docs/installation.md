# Installation

###### NPM 5
`npm install ng-snotify`
###### yarn
`yarn add ng-snotify`


#### Import Module
Import SnotifyModule, also you can try SnotifyModule.forRoot() if you have build errors  
And provide SnotifyService with default configuration object  
> How to change ToastDefaults config - [options](api/options.md)

```typescript
// Import your library
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  imports: [
    BrowserModule,
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyConfig', useValue: ToastDefaults},
    SnotifyService
  ]
})
export class AppModule { }
```

#### Add selector
Include `ng-snotify` component to you root component

```html
<ng-snotify></ng-snotify>
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


#### Import Styles

You can find this information - [here](essentials/styling.md)
