import {Message} from '../../messages/message.model';
import {Config} from '../interfaces/config.interfaces';

export interface ConfigState {
  config: Config;
  configLoading: boolean;
  configError: Message;
  configSuccess: Message;
}

export const initialState: ConfigState = {
  config: null,
  configLoading: false,
  configError: null,
  configSuccess: null
};
