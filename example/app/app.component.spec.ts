/* tslint:disable:no-unused-variable */

import { FormsModule } from '@angular/forms';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {SnotifyPosition} from '../../src/snotify/enums/SnotifyPosition.enum';

describe('NgSnotify Testing', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, SnotifyModule ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
        SnotifyService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', (done) => {
    expect(component).toBeTruthy();
    done();
  });

  it(`should render title in a h1 tag 'Ng-Snotify'`, (done) => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.brand h1').textContent).toContain('Ng-Snotify');
    done();
  });

  it(`should init basic options`, (done) => {
    const service: SnotifyService = fixture.debugElement.injector.get(SnotifyService);
    fixture.detectChanges();
    expect(service.config).toEqual(jasmine.objectContaining(ToastDefaults));
    done();
  });

  it('should create success toast with body', (done) => {
    const service: SnotifyService = fixture.debugElement.injector.get(SnotifyService);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    service.success('Ng-Snotify');
    fixture.detectChanges();
    expect(compiled.querySelector('.snotifyToast').textContent).toContain('Ng-Snotify');
    done();
  });

  it('should create simple toast with body and title', (done) => {
    const service: SnotifyService = fixture.debugElement.injector.get(SnotifyService);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    service.simple('Ng-Snotify b', 'Ng-Snotify t');
    fixture.detectChanges();
    expect(compiled.querySelector('.snotifyToast .snotifyToast__body').textContent).toContain('Ng-Snotify b');
    expect(compiled.querySelector('.snotifyToast .snotifyToast__title').textContent).toContain('Ng-Snotify t');
    done();
  });

  it('should execute confirm button action', (done) => {
    let result = null;
    const service: SnotifyService = fixture.debugElement.injector.get(SnotifyService);
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
    done();
  });

  it('should create prompt toast with 4 buttons', (done) => {
    const service: SnotifyService = fixture.debugElement.injector.get(SnotifyService);
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
    done();
  });

  it('should create html toast with html content', (done) => {
    const service: SnotifyService = fixture.debugElement.injector.get(SnotifyService);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    service.html(`<strong>HTML Toast Content</strong>`);
    fixture.detectChanges();
    expect(compiled.querySelector('.snotifyToast .snotifyToast__inner').textContent).toContain('HTML Toast Content');
    done();
  });

  it('should create 3 toasts max at rightTop position', (done) => {
    const service: SnotifyService = fixture.debugElement.injector.get(SnotifyService);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    service.setDefaults({
      global: {
        maxAtPosition: 3
      },
      toast: {
        position: SnotifyPosition.rightTop,
      }
    });
    fixture.detectChanges();

    service.simple('Test');
    service.success('Test');
    service.error('Test');

    fixture.detectChanges();
    expect(compiled.querySelectorAll('.snotify-rightTop > ng-snotify-toast').length).toEqual(3);
    done();
  });

  it('should create toasts at different positions', (done) => {
    const service: SnotifyService = fixture.debugElement.injector.get(SnotifyService);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    service.simple('Test', null, {
      position: SnotifyPosition.centerBottom
    });
    service.success('Test', null, {
      position: SnotifyPosition.leftBottom
    });
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.snotify-leftBottom > ng-snotify-toast').length).toEqual(1);
    expect(compiled.querySelectorAll('.snotify-centerBottom > ng-snotify-toast').length).toEqual(1);
    done();
  });

});
