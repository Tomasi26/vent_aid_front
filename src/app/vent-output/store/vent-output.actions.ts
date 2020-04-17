import { Action } from '@ngrx/store';

import { VentOutput } from '../model/vent-output.model';
import {VentOutputParams, VentOutputResponse} from '../interfaces/vent-output.interfaces';
import {Message} from '../../messages/message.model';

// roles
export const FETCH_VENT_OUTPUT = '[VentOutput] Fetch VentOutput';
export const SET_VENT_OUTPUT = '[VentOutput] Set VentOutput';
export const VENT_OUTPUT_FAILURE = '[VentOutput] VentOutput Failure';
export const VENT_OUTPUT_SUCCESS = '[VentOutput] VentOutput Success';
export const VENT_OUTPUT_CLEAN = '[VentOutput] VentOutput Clean';
export const VENT_OUTPUT_DUMMY = '[VentOutput] Role Dummy';

// roles actions
export class FetchVentOutput implements Action {
  readonly type = FETCH_VENT_OUTPUT;

  constructor(public payload: {
    params: VentOutputParams
  }) {}
}

export class SetVentOutput implements Action {
  readonly type = SET_VENT_OUTPUT;

  constructor(public payload: {
    output: VentOutput
  }) {}
}

export class VentOutputFailure implements Action {
  readonly type = VENT_OUTPUT_FAILURE;

  constructor(public payload: {errorMessage: Message}) {}
}

export class VentOutputSuccess implements Action {
  readonly type = VENT_OUTPUT_SUCCESS;

  constructor(public payload: {successMessage: Message}) {}
}

export class VentOutputClean implements Action {
  readonly type = VENT_OUTPUT_CLEAN;
}

// dummy
export class VentOutputDummy implements Action {
  readonly type = VENT_OUTPUT_DUMMY;
}

export type VentOutputActions =
    | FetchVentOutput
    | SetVentOutput
    | VentOutputFailure
    | VentOutputSuccess
    | VentOutputClean
    | VentOutputDummy
  ;
