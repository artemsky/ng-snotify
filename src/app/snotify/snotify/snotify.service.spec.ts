import { TestBed, inject } from '@angular/core/testing';

import { SnotifyService } from './snotify.service';

describe('SnotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnotifyService]
    });
  });

  it('should ...', inject([SnotifyService], (service: SnotifyService) => {
    expect(service).toBeTruthy();
  }));
});
