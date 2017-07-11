/* tslint:disable:no-unused-variable */

import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SnotifyModule, SnotifyService} from 'ng-snotify';

describe('App: CompleteGuideFinalWebpack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, SnotifyModule ],
      declarations: [
        AppComponent
      ],
      providers: [SnotifyService]
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should render title in a h1 tag 'Ng-Snotify'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.brand h1').textContent).toContain('Ng-Snotify');
  }));

  it(`should init basic options`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(SnotifyService);
    fixture.detectChanges();
    expect(service.options).toEqual(jasmine.objectContaining({
      ...service.options,
      newOnTop: false,
      position: app.position,
      maxHeight: 500
    }));
  }));

  it('should create success toast with body', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(SnotifyService);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    service.success('Ng-Snotify');
    fixture.detectChanges();
    expect(compiled.querySelector('.snotifyToast').textContent).toContain('Ng-Snotify');
  }));

  it('should create simple toast with body and title', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(SnotifyService);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    service.simple('Ng-Snotify b', 'Ng-Snotify t');
    fixture.detectChanges();
    expect(compiled.querySelector('.snotifyToast .snotifyToast__body').textContent).toContain('Ng-Snotify b');
    expect(compiled.querySelector('.snotifyToast .snotifyToast__title').textContent).toContain('Ng-Snotify t');
  }));

  it('should execute confirm button action', async(() => {
    let result = null;

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(SnotifyService);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const toastID = service.confirm('Ng-Snotify', null, {
      buttons: [
        {text: 'Yes', action: (id) => result = id}
      ]
    });
    fixture.detectChanges();
    compiled.querySelector('.snotifyToast button').click();

    expect(result).toEqual(toastID);
  }));

  it('should create prompt toast with 4 buttons', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(SnotifyService);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    service.prompt('Ng-Snotify', null, {
      buttons: [
        {text: 'Yes'},
        {text: 'Yes'},
        {text: 'Yes'},
        {text: 'Yes'},
      ]
    });
    fixture.detectChanges();


    expect(compiled.querySelectorAll('.snotifyToast button').length).toEqual(4);
  }));

});
