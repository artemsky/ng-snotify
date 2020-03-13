import { FormsModule } from '@angular/forms';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SnotifyModule, SnotifyPosition, SnotifyService, ToastDefaults } from 'ng-snotify';

describe('NgSnotify Testing', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: SnotifyService;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, SnotifyModule],
      declarations: [AppComponent],
      providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults }, SnotifyService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SnotifyService);
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', done => {
    expect(component).toBeTruthy();
    done();
  });

  it(`should render title in a h1 tag 'Ng-Snotify'`, done => {
    expect(compiled.querySelector('.brand h1').textContent).toContain('Ng-Snotify');
    done();
  });

  it(`should init basic options`, done => {
    expect(service.config).toEqual(jasmine.objectContaining(ToastDefaults));
    done();
  });

  it('should create success toast with body', done => {
    service.success('Ng-Snotify');
    fixture.detectChanges();
    expect(compiled.querySelector('.snotifyToast').textContent).toContain('Ng-Snotify');
    done();
  });

  it('should create simple toast with body and title', done => {
    service.simple('Ng-Snotify b', 'Ng-Snotify t');
    fixture.detectChanges();
    expect(compiled.querySelector('.snotifyToast .snotifyToast__body').textContent).toContain('Ng-Snotify b');
    expect(compiled.querySelector('.snotifyToast .snotifyToast__title').textContent).toContain('Ng-Snotify t');
    done();
  });

  it('should execute confirm buttons action', done => {
    let result = null;

    const toastID = service.confirm('Ng-Snotify', null, {
      buttons: [{ text: 'Yes', action: id => (result = id) }]
    });
    fixture.detectChanges();
    compiled.querySelector('.snotifyToast .snotifyToast__buttons > button').click();

    expect(result).toEqual(toastID);
    done();
  });

  it('should create prompt toast with 4 buttons', done => {
    service.prompt('Ng-Snotify', null, {
      buttons: [{ text: 'Yes' }, { text: 'Yes' }, { text: 'Yes' }, { text: 'Yes' }]
    });
    fixture.detectChanges();

    expect(compiled.querySelectorAll('.snotifyToast .snotifyToast__buttons > button').length).toEqual(4);
    done();
  });

  it('should create html toast with html content', done => {
    service.html(`<strong>HTML Toast Content</strong>`);
    fixture.detectChanges();
    expect(compiled.querySelector('.snotifyToast .snotifyToast__inner').textContent).toContain('HTML Toast Content');
    done();
  });

  it('should create 3 toasts max at rightTop position', done => {
    service.setDefaults({
      global: {
        maxAtPosition: 3
      },
      toast: {
        position: SnotifyPosition.rightTop
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

  it('should create toasts at different positions', done => {
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
