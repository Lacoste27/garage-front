import { TestBed } from '@angular/core/testing';

import { FinancierguardService } from './financierguard.service';

describe('FinancierguardService', () => {
  let service: FinancierguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancierguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
