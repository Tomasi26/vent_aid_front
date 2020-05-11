import { TestBed } from '@angular/core/testing';

import { BleConnectService } from './ble-connect.service';

describe('BleConnectService', () => {
  let service: BleConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BleConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
