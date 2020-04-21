import {Message} from '../../messages/message.model';
import {VentMode} from '../dashboard.enums';

export interface DashboardState {
  mode: VentMode;
  controls: {};
  sensors: {};
  dashboardLoading: boolean;
  dashboardError: Message;
  dashboardSuccess: Message;
}

export const initialState: DashboardState = {
  mode: VentMode.none,
  controls: {},
  sensors: {},
  dashboardLoading: false,
  dashboardError: null,
  dashboardSuccess: null
};
