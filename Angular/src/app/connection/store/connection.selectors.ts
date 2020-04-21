import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import {Message} from '../../messages/message.model';
import {CONNECTION_STORE_KEY} from '../constants/connection.constants';
import {ConnectionState} from './connection.state';
import {Device} from '../models/device.model';

// connection selectors helpers
const getDevice = (state: ConnectionState): Device => state.device;

const getOptionalDevices = (state: ConnectionState): {} => state.optionalDevices;

const getDevicesHistory = (state: ConnectionState): {} => state.devicesHistory;

const getConnectionLoading = (state: ConnectionState): boolean => state.connectionLoading;

const getConnectionSuccess = (state: ConnectionState): Message => state.connectionSuccess;

const getConnectionError = (state: ConnectionState): Message => state.connectionError;

// connection feature selectors
export const selectConnectionStateFeatureState: MemoizedSelector<
  object,
  ConnectionState
  > = createFeatureSelector<ConnectionState>(CONNECTION_STORE_KEY);

// connection selectors
export const selectDevice: MemoizedSelector<
  object,
  Device
  > = createSelector(
  selectConnectionStateFeatureState,
  getDevice
);

export const selectOptionalDevices: MemoizedSelector<
  object,
  {}
  > = createSelector(
  selectConnectionStateFeatureState,
  getOptionalDevices
);

export const selectDevicesHistory: MemoizedSelector<
  object,
  {}
  > = createSelector(
  selectConnectionStateFeatureState,
  getDevicesHistory
);

export const selectConnectionLoading: MemoizedSelector<
  object,
  boolean
  > = createSelector(
  selectConnectionStateFeatureState,
  getConnectionLoading
);

export const selectConnectionSuccess: MemoizedSelector<
  object,
  Message
  > = createSelector(
  selectConnectionStateFeatureState,
  getConnectionSuccess
);

export const selectConnectionError: MemoizedSelector<
  object,
  Message
  > = createSelector(
  selectConnectionStateFeatureState,
  getConnectionError
);
