import { TestBed } from '@angular/core/testing';

import { BleScanService } from './ble-scan.service';

describe('BleScanService', () => {
  let service: BleScanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BleScanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
