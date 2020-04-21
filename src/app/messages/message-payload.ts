// messages


import {VentData} from '../dashboard/model/vent-data.model';
import {VentMode} from '../dashboard/dashboard.enums';

export interface MessagePayload {
  data?: VentData;
  mode?: VentMode;
}
