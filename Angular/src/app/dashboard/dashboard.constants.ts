import {VentMode} from './dashboard.enums';

export const DASHBOARD_STORE_KEY = 'dashboard';
export const TIDAL_VOLUME_DATA = {
  name: 'Tidal volume (mL)',
  min: 300,
  max: 800,
  interval: 50
};
export const PEAK_FLOW_DATA = {
  name: 'Peak Flow (L/min)',
  min: 40,
  max: 50,
  interval: 5
};
export const IE_RATIO_DATA = {
  name: 'I/E ratio',
  min: 0,
  max: 1,
  interval: 0.2
};
export const FIO2_DATA = {
  name: 'FiO2',
};
export const TRIGGER_DATA = {
  name: 'Trigger (cmH2O)',
  min: 1,
  max: 10,
  interval: 1
};
export const INSPIRATORY_PRESSURE_DATA = {
  name: 'Inspiratory Pressure (cmH2O)',
  min: 10,
  max: 60,
  interval: 5
};
export const RATE_DATA = {
  name: 'Rate (breaths/min)',
  min: 8,
  max: 30,
  interval: 1
};
export const CVM_MODE_TITLE = 'Continuous mandatory ventilation (CMV)';
export const AC_MODE_TITLE = 'Assist control (A/C)';
export const SIMV_MODE_TITLE = 'Synchronized Intermittent Mandatory Ventilation (SIMV)';
export const PCV_MODE_TITLE = 'Pressure controlled ventilation (PCV)';
export const PS_MODE_TITLE = 'Pressure Support (PS)';

export const MODES_NAMES = {
  [VentMode.cmv]: CVM_MODE_TITLE,
  [VentMode.ac]: AC_MODE_TITLE,
  [VentMode.simv]: SIMV_MODE_TITLE,
  [VentMode.pcv]: PCV_MODE_TITLE,
  [VentMode.ps]: PS_MODE_TITLE,
};

export const DASHBOARD_CONFIG_DATA = {
  tidalVolume: TIDAL_VOLUME_DATA,
  peakFlow: PEAK_FLOW_DATA,
  ieRatio: IE_RATIO_DATA,
  fio2: FIO2_DATA,
  trigger: TRIGGER_DATA,
  inspiratoryPressure: INSPIRATORY_PRESSURE_DATA,
  rate: RATE_DATA
};
