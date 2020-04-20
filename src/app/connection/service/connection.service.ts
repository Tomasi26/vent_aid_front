import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PairParams, PairResponse,
  ScanParams, ScanResponse
} from '../interfaces/connection.interfaces';
import {of, throwError} from 'rxjs';
import {Device} from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor() {}

  // scan bt
  public bluetoothScan(params: ScanParams): Observable<ScanResponse> {

    const dummyDevices: Device[] = [
      new Device('1'),
      new Device('2'),
      new Device('3'),
      new Device('4'),
    ];

    const dummyScanResponse: ScanResponse = {
      devices: dummyDevices
    };

    return of(dummyScanResponse);
  }

  // pair bt
  public bluetoothPair(params: PairParams): Observable<PairResponse> {

    const dummyDevice: Device = new Device('1');

    const dummyPairResponse: PairResponse = {
      device: dummyDevice
    };

    return of(dummyPairResponse);
  }

}
