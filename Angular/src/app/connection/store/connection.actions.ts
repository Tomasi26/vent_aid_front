import { Action } from '@ngrx/store';
import {Message} from '../../messages/message.model';
import {Device} from '../models/device.model';

// scan
export const SCAN_START = '[Connection] Scan Start';
export const SCAN_SUCCESS = '[Connection] Scan Success';
export const SCAN_FAILURE = '[Connection] Scan Failure';

// pair
export const PAIR_START = '[Connection] Pair Start';
export const PAIR_SUCCESS = '[Connection] Pair Success';
export const PAIR_FAILURE = '[Connection] Pair Failure';

// un pair
export const UNPAIR_START = '[Connection] UnPair Start';
export const UNPAIR_SUCCESS = '[Connection] UnPair Success';
export const UNPAIR_FAILURE = '[Connection] UnPair Failure';

// auto pairing
export const AUTO_PAIRING = '[Connection] Auto Pairing';

// clear
export const CLEAR = '[Connection] Dummy';

// dummy
export const DUMMY = '[Connection] Dummy';

// scan
export class ScanStart implements Action {
  readonly type = SCAN_START;

  constructor() {}
}

export class ScanSuccess implements Action {
  readonly type = SCAN_SUCCESS;

  constructor(public payload: {optionalDevices: Device[], successMessage: Message}) {}
}

export class ScanFailure implements Action {
  readonly type = SCAN_FAILURE;

  constructor(public payload: {errorMessage: Message}) {}
}

// pair
export class PairStart implements Action {
  readonly type = PAIR_START;

  constructor(public payload: {device: Device}) {}
}

export class PairSuccess implements Action {
  readonly type = PAIR_SUCCESS;

  constructor(public payload: {device: Device, successMessage: Message}) {}
}

export class PairFailure implements Action {
  readonly type = PAIR_FAILURE;

  constructor(public payload: {errorMessage: Message}) {}
}

// unpair
export class UnPairStart implements Action {
  readonly type = UNPAIR_START;

  constructor() {}
}

export class UnPairSuccess implements Action {
  readonly type = UNPAIR_SUCCESS;

  constructor(public payload: {successMessage: Message}) {}
}

export class UnPairFailure implements Action {
  readonly type = UNPAIR_FAILURE;

  constructor(public payload: {errorMessage: Message}) {}
}

// clear
export class ConnectionClear implements Action {
  readonly type = CLEAR;
}

// dummy
export class ConnectionDummy implements Action {
  readonly type = DUMMY;
}

export type ConnectionActions =
  | ScanStart
  | ScanSuccess
  | ScanFailure
  | PairStart
  | PairSuccess
  | PairFailure
  | UnPairStart
  | UnPairSuccess
  | UnPairFailure
  | ConnectionClear
  | ConnectionDummy;
