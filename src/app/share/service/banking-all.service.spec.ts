import { TestBed } from '@angular/core/testing';

import { BankingAllService } from './banking-all.service';

describe('BankingAllService', () => {
  let service: BankingAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankingAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
