import * as ConfigActions from './config.actions';
import { initialState, ConfigState } from './config.state';

export function configReducer(state = initialState, action: ConfigActions.ConfigActions) {
  switch (action.type) {
    case ConfigActions.FETCH_CONFIG:
      return {
        ...state,
        config: null,
        configLoading: true,
        configError: null,
        configSuccess: null
      };
    case ConfigActions.SET_CONFIG:
      return {
        ...state,
        config: action.payload.config,
        configLoading: false,
        configError: null,
        configSuccess: null
      };
    case ConfigActions.CONFIG_FAILURE:
      return {
        ...state,
        configLoading: false,
        configError: action.payload.errorMessage,
        configSuccess: null
      };
    case ConfigActions.CONFIG_SUCCESS:
      return {
        ...state,
        configLoading: false,
        configError: null,
        configSuccess: action.payload.successMessage
      };
    case ConfigActions.CONFIG_CLEAN:
      return {
        ...state,
        config: null,
        configLoading: false,
        configError: null,
        configSuccess: null
      };
    default:
      return state;
  }
}
