import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import {DashboardState} from './dashboard.state';
import {Message} from '../../messages/message.model';
import {VentMode} from '../dashboard.enums';
import {DASHBOARD_STORE_KEY} from '../dashboard.constants';

// vent output selectors helpers
const getMode = (state: DashboardState): VentMode => state.mode;

const getControls = (state: DashboardState): {} => state.controls;

const getSensors = (state: DashboardState): {} => state.sensors;

const getDashboardLoading = (state: DashboardState): boolean => state.dashboardLoading;

const getDashboardSuccess = (state: DashboardState): Message => state.dashboardSuccess;

const getDashboardError = (state: DashboardState): Message => state.dashboardError;

// vent output feature selectors
export const selectDashboardStateFeatureState: MemoizedSelector<
  object,
  DashboardState
  > = createFeatureSelector<DashboardState>(DASHBOARD_STORE_KEY);

// vent output selectors
export const selectMode: MemoizedSelector<
  object,
  VentMode
  > = createSelector(
  selectDashboardStateFeatureState,
  getMode
);

export const selectControls: MemoizedSelector<
  object,
  {}
  > = createSelector(
  selectDashboardStateFeatureState,
  getControls
);

export const selectSensors: MemoizedSelector<
  object,
  {}
  > = createSelector(
  selectDashboardStateFeatureState,
  getSensors
);

export const selectDashboardLoading: MemoizedSelector<
  object,
  boolean
  > = createSelector(
  selectDashboardStateFeatureState,
  getDashboardLoading
);

export const selectDashboardSuccess: MemoizedSelector<
  object,
  Message
  > = createSelector(
  selectDashboardStateFeatureState,
  getDashboardSuccess
);

export const selectDashboardError: MemoizedSelector<
  object,
  Message
  > = createSelector(
  selectDashboardStateFeatureState,
  getDashboardError
);
