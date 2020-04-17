import * as VentOutputActions from './vent-output.actions';
import { initialState, VentOutputState } from './vent-output.state';


export function ventOutputReducer(state = initialState, action: VentOutputActions.VentOutputActions) {
  switch (action.type) {
    case VentOutputActions.FETCH_VENT_OUTPUT:
      return {
        ...state,
        ventOutput: null,
        ventOutputLoading: true,
        ventOutputError: null,
        ventOutputSuccess: null
      };
    case VentOutputActions.SET_VENT_OUTPUT:
      return {
        ...state,
        ventOutput: action.payload.output,
        ventOutputLoading: false,
        ventOutputError: null,
        ventOutputSuccess: null
      };
    case VentOutputActions.VENT_OUTPUT_FAILURE:
      return {
        ...state,
        ventOutputLoading: false,
        ventOutputError: action.payload.errorMessage,
        ventOutputSuccess: null
      };
    case VentOutputActions.VENT_OUTPUT_SUCCESS:
      return {
        ...state,
        ventOutputLoading: false,
        ventOutputError: null,
        ventOutputSuccess: action.payload.successMessage
      };
    case VentOutputActions.VENT_OUTPUT_CLEAN:
      return {
        ...state,
        ventOutput: null,
        ventOutputLoading: false,
        ventOutputError: null,
        ventOutputSuccess: null
      };
    default:
      return state;
  }
}
