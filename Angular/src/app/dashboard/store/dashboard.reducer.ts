import * as DashboardActions from './dashboard.actions';
import {initialState} from './dashboard.state';
import {VentData} from '../model/vent-data.model';
import {VentDataType, VentMode} from '../dashboard.enums';


export function dashboardReducer(state = initialState, action: DashboardActions.DashboardActions) {
  switch (action.type) {
    // mode
    case DashboardActions.SET_MODE:
      return {
        ...state,
        mode: action.payload.mode,
        dashboardLoading: false,
        dashboardError: null,
        dashboardSuccess: null
      };
    // data
    case DashboardActions.FETCH_DATA:
      return {
        ...state,
        dashboardLoading: false,
        dashboardError: null,
        dashboardSuccess: null
      };
    case DashboardActions.UPDATE_DATA:
      return {
        ...state,
        dashboardLoading: false,
        dashboardError: null,
        dashboardSuccess: null
      };
    case DashboardActions.SET_DATA:
      const data = action.payload.data && action.payload.data.name ? action.payload.data : new VentData();
      switch (data.type) {
        case VentDataType.control:
          return {
            ...state,
            controls: {...state.controls, [data.name]: data},
            dashboardLoading: false,
            dashboardError: null,
            dashboardSuccess: null
          };
        case VentDataType.sensor:
          return {
            ...state,
            sensors: {...state.sensors, [data.name]: data},
            dashboardLoading: false,
            dashboardError: null,
            dashboardSuccess: null
          };
        default:
          return {
            ...state,
            dashboardLoading: false,
            dashboardError: null,
            dashboardSuccess: null
          };
      }
    case DashboardActions.DASHBOARD_FAILURE:
      return {
        ...state,
        dashboardLoading: false,
        dashboardError: action.payload.errorMessage,
        dashboardSuccess: null
      };
    case DashboardActions.DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboardLoading: false,
        dashboardError: null,
        dashboardSuccess: action.payload.successMessage
      };
    case DashboardActions.DASHBOARD_CLEAN:
      return {
        ...state,
        mode: VentMode.none,
        controls: {},
        sensors: {},
        dashboardLoading: false,
        dashboardError: null,
        dashboardSuccess: null
      };
    default:
      return state;
  }
}
