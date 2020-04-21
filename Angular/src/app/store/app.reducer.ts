import { ActionReducerMap } from '@ngrx/store';

import { ConnectionState } from '../connection/store/connection.state';
import * as fromConnection from '../connection/store/connection.reducer';
import {CONNECTION_STORE_KEY} from '../connection/constants/connection.constants';

export interface AppState {
  [CONNECTION_STORE_KEY]: ConnectionState;
}

export const appReducer: ActionReducerMap<AppState> = {
  [CONNECTION_STORE_KEY]: fromConnection.connectionReducer
};
