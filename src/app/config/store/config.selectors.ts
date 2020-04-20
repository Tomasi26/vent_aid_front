import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import {ConfigState} from './config.state';
import {CONFIG_STORE_KEY} from '../constants/config.constants';
import {Message} from '../../messages/message.model';
import {Config} from '../interfaces/config.interfaces';

// config selectors helpers
const getConfig = (state: ConfigState): Config => state.config;

const getConfigLoading = (state: ConfigState): boolean => state.configLoading;

const getConfigSuccess = (state: ConfigState): Message => state.configSuccess;

const getConfigError = (state: ConfigState): Message => state.configError;

// config feature selectors
export const selectConfigStateFeatureState: MemoizedSelector<
  object,
  ConfigState
  > = createFeatureSelector<ConfigState>(CONFIG_STORE_KEY);

// vent output selectors
export const selectConfig: MemoizedSelector<
  object,
  Config
  > = createSelector(
  selectConfigStateFeatureState,
  getConfig
);

export const selectConfigLoading: MemoizedSelector<
  object,
  boolean
  > = createSelector(
  selectConfigStateFeatureState,
  getConfigLoading
);

export const selectConfigSuccess: MemoizedSelector<
  object,
  Message
  > = createSelector(
  selectConfigStateFeatureState,
  getConfigSuccess
);

export const selectConfigError: MemoizedSelector<
  object,
  Message
  > = createSelector(
  selectConfigStateFeatureState,
  getConfigError
);
