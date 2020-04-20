import {Device} from '../models/device.model';

// tslint:disable-next-line:no-empty-interface
export interface ScanParams {
}

export interface ScanResponse {
  devices?: Device[];
}

// tslint:disable-next-line:no-empty-interface
export interface PairParams {
  device?: Device;
}

export interface PairResponse {
  device?: Device;
}
