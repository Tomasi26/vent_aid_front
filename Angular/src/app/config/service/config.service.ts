import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {of, throwError} from 'rxjs';
import {Config, GetConfigParams, GetConfigResponse} from '../interfaces/config.interfaces';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private httpClient: HttpClient) {}

  public getConfig(params: GetConfigParams): Observable<GetConfigResponse> {

    const dummyConfig: Config = {};

    const dummyVentConfigResponse: GetConfigResponse = {
      config: dummyConfig
    };

    return this.httpClient.get<GetConfigResponse>('./assets/config.json');
  }

}
