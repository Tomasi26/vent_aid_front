import {VentOutput} from '../model/vent-output.model';
import {Message} from '../../messages/message.model';

export interface VentOutputState {
  ventOutput: VentOutput;
  ventOutputLoading: boolean;
  ventOutputError: Message;
  ventOutputSuccess: Message;
}

export const initialState: VentOutputState = {
  ventOutput: null,
  ventOutputLoading: false,
  ventOutputError: null,
  ventOutputSuccess: null
};
