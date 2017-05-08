import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnotifyComponent } from './snotify.component';

describe('SnotifyComponent', () => {
  let component: SnotifyComponent;
  let fixture: ComponentFixture<SnotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
