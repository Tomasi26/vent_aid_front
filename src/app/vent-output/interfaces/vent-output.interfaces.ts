import {VentOutput} from '../model/vent-output.model';

export interface VentOutputFilter {
  bpm?: boolean;
  compressionPercentage?: boolean;
  pressureAbsolute?: boolean;
  inspiriumPressure?: boolean;
}

export interface VentOutputParams {
  filter?: VentOutputFilter;
}

export interface VentOutputResponse {
  output?: VentOutput;
}
