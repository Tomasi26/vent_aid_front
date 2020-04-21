import { Action } from '@ngrx/store';

import {GetConfigParams, GetConfigResponse, Config} from '../interfaces/config.interfaces';
import {Message} from '../../messages/message.model';

// vent output
export const FETCH_CONFIG = '[Config] Fetch Config';
export const SET_CONFIG = '[Config] Set Config';
export const CONFIG_FAILURE = '[Config] Config Failure';
export const CONFIG_SUCCESS = '[Config] Config Success';
export const CONFIG_CLEAN = '[Config] Config Clean';
export const CONFIG_DUMMY = '[Config] Config Dummy';

// vent output actions
export class FetchConfig implements Action {
  readonly type = FETCH_CONFIG;

  constructor(public payload: {
    params: GetConfigParams
  }) {}
}

export class SetConfig implements Action {
  readonly type = SET_CONFIG;

  constructor(public payload: {
    config: Config
  }) {}
}

export class ConfigFailure implements Action {
  readonly type = CONFIG_FAILURE;

  constructor(public payload: {errorMessage: Message}) {}
}

export class ConfigSuccess implements Action {
  readonly type = CONFIG_SUCCESS;

  constructor(public payload: {successMessage: Message}) {}
}

export class ConfigClean implements Action {
  readonly type = CONFIG_CLEAN;
}

// dummy
export class ConfigDummy implements Action {
  readonly type = CONFIG_DUMMY;
}

export type ConfigActions =
    | FetchConfig
    | SetConfig
    | ConfigFailure
    | ConfigSuccess
    | ConfigClean
    | ConfigDummy
  ;
