import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  VentOutputParams,
  VentOutputResponse
} from '../interfaces/vent-output.interfaces';
import {VentOutput} from '../model/vent-output.model';
import {of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentOutputService {

  constructor() {}

  public getVentOutput(params: VentOutputParams): Observable<VentOutputResponse> {

    const dummyVentOutput: VentOutput = {
      bpm: 'BPM',
      compressionPercentage: 'COMPRESSION_PERCENTAGE',
      pressureAbsolute: 'PRESSURE_ABSOLUTE',
      inspiriumPressure: 'INSPIRIUM_PRESSURE'
    };

    const dummyVentOutputResponse: VentOutputResponse = {
      output: dummyVentOutput
    };

    return of(dummyVentOutputResponse);
  }

}
