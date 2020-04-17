import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import {VentOutputState} from './vent-output.state';
import {VENT_OUTPUT_STORE_KEY} from '../constants/vent-output.constants';
import {Message} from '../../messages/message.model';
import {VentOutput} from '../model/vent-output.model';

// vent output selectors helpers
const getVentOutput = (state: VentOutputState): VentOutput => state.ventOutput;

const getVentOutputLoading = (state: VentOutputState): boolean => state.ventOutputLoading;

const getVentOutputSuccess = (state: VentOutputState): Message => state.ventOutputSuccess;

const getVentOutputError = (state: VentOutputState): Message => state.ventOutputError;

// vent output feature selectors
export const selectVentOutputStateFeatureState: MemoizedSelector<
  object,
  VentOutputState
  > = createFeatureSelector<VentOutputState>(VENT_OUTPUT_STORE_KEY);

// vent output selectors
export const selectVentOutput: MemoizedSelector<
  object,
  VentOutput
  > = createSelector(
  selectVentOutputStateFeatureState,
  getVentOutput
);

export const selectVentOutputLoading: MemoizedSelector<
  object,
  boolean
  > = createSelector(
  selectVentOutputStateFeatureState,
  getVentOutputLoading
);

export const selectVentOutputSuccess: MemoizedSelector<
  object,
  Message
  > = createSelector(
  selectVentOutputStateFeatureState,
  getVentOutputSuccess
);

export const selectVentOutputError: MemoizedSelector<
  object,
  Message
  > = createSelector(
  selectVentOutputStateFeatureState,
  getVentOutputError
);
