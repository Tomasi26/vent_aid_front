import _ from 'lodash';
import * as ConnectionActions from './connection.actions';
import {Message} from '../../messages/message.model';
import {Device} from '../models/device.model';
import { initialState, ConnectionState } from './connection.state';


export function connectionReducer(
  state = initialState,
  action: ConnectionActions.ConnectionActions
) {
  switch (action.type) {
    // scan
    case ConnectionActions.SCAN_START:
      return {
        ...state,
        device: null,
        connectionLoading: true,
        connectionSuccess: null,
        connectionError: null
      };
    case ConnectionActions.SCAN_SUCCESS:
      return {
        ...state,
        optionalDevices: {..._.mapKeys(action.payload.optionalDevices, 'id')},
        connectionLoading: false,
        connectionSuccess: action.payload.successMessage,
        connectionError: null
      };
    case ConnectionActions.SCAN_FAILURE:
      return {
        ...state,
        connectionLoading: false,
        connectionSuccess: null,
        connectionError: action.payload.errorMessage
      };
    // pair
    case ConnectionActions.PAIR_START:
      return {
        ...state,
        device: null,
        connectionLoading: true,
        connectionSuccess: null,
        connectionError: null
      };
    case ConnectionActions.PAIR_SUCCESS:
      return {
        ...state,
        device: action.payload.device,
        devicesHistory: {...state.devicesHistory, [action.payload.device.id]: action.payload.device},
        connectionLoading: false,
        connectionSuccess: action.payload.successMessage,
        connectionError: null
      };
    case ConnectionActions.PAIR_FAILURE:
      return {
        ...state,
        connectionLoading: false,
        connectionSuccess: null,
        connectionError: action.payload.errorMessage
      };
    // un pair
    case ConnectionActions.UNPAIR_START:
      return {
        ...state,
        connectionLoading: true,
        connectionSuccess: null,
        connectionError: null
      };
    case ConnectionActions.UNPAIR_SUCCESS:
      return {
        ...state,
        device: null,
        connectionLoading: false,
        connectionSuccess: action.payload.successMessage,
        connectionError: null
      };
    case ConnectionActions.UNPAIR_FAILURE:
      return {
        ...state,
        connectionLoading: false,
        connectionSuccess: null,
        connectionError: action.payload.errorMessage
      };
      // clear
    case ConnectionActions.CLEAR:
      return {
        ...state,
        device: null,
        optionalDevices: {},
        devicesHistory: {},
        connectionLoading: false,
        connectionSuccess: null,
        connectionError: null
      };

    default:
      return state;
  }
}
