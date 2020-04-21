import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {VentData} from '../model/vent-data.model';
import {VentDataType} from '../dashboard.enums';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() {}

  public fetchDataFromVent(data: VentData): Observable<VentData> {

    const dummyVentData: VentData = {
      type: VentDataType.control,
      name: 'NAME',
      data: 'DATA',
      enable: true,
      readOnly: true
    };

    return of(dummyVentData);
  }

  public updateDataToVent(data: VentData): Observable<VentData> {

    const dummyVentData: VentData = {
      type: VentDataType.control,
      name: 'NAME',
      data: 'DATA',
      enable: true,
      readOnly: true
    };

    return of(dummyVentData);
  }

}
