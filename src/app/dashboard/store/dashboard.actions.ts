import { Action } from '@ngrx/store';
import {Message} from '../../messages/message.model';
import {VentData} from '../model/vent-data.model';
import {VentMode} from '../dashboard.enums';

// vent output
export const SET_MODE = '[Dashboard] Set Mode';
export const FETCH_DATA = '[Dashboard] Fetch Data';
export const SET_DATA = '[Dashboard] Set Data';
export const UPDATE_DATA = '[Dashboard] Update Data';
export const DASHBOARD_FAILURE = '[Dashboard] Dashboard Failure';
export const DASHBOARD_SUCCESS = '[Dashboard] Dashboard Success';
export const DASHBOARD_CLEAN = '[Dashboard] Dashboard Clean';
export const DASHBOARD_DUMMY = '[Dashboard] Dashboard Dummy';

// vent mode actions
export class SetMode implements Action {
  readonly type = SET_MODE;

  constructor(public payload: {
    mode: VentMode
  }) {}
}

// vent data actions
export class FetchData implements Action {
  readonly type = FETCH_DATA;

  constructor(public payload: {
    data: VentData
  }) {}
}

export class SetData implements Action {
  readonly type = SET_DATA;

  constructor(public payload: {
    data: VentData
  }) {}
}

export class UpdateData implements Action {
  readonly type = UPDATE_DATA;

  constructor(public payload: {
    data: VentData
  }) {}
}

export class DashboardFailure implements Action {
  readonly type = DASHBOARD_FAILURE;

  constructor(public payload: {errorMessage: Message}) {}
}

export class DashboardSuccess implements Action {
  readonly type = DASHBOARD_SUCCESS;

  constructor(public payload: {successMessage: Message}) {}
}

export class DashboardClean implements Action {
  readonly type = DASHBOARD_CLEAN;
}

// dummy
export class DashboardDummy implements Action {
  readonly type = DASHBOARD_DUMMY;
}

export type DashboardActions =
  | SetMode
  | FetchData
  | SetData
  | UpdateData
  | DashboardFailure
  | DashboardSuccess
  | DashboardClean
  | DashboardDummy
  ;
