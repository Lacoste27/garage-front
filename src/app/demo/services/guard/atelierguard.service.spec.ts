import { TestBed } from '@angular/core/testing';

import { AtelierguardService } from './atelierguard.service';

describe('AtelierguardService', () => {
  let service: AtelierguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtelierguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
