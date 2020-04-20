import {Message} from '../../messages/message.model';
import {Device} from '../models/device.model';

export interface ConnectionState {
  device: Device;
  optionalDevices: {};
  devicesHistory: {};
  connectionLoading: boolean;
  connectionSuccess: Message;
  connectionError: Message;
}

export const initialState: ConnectionState = {
  device: null,
  optionalDevices: {},
  devicesHistory: {},
  connectionLoading: false,
  connectionSuccess: null,
  connectionError: null
};
