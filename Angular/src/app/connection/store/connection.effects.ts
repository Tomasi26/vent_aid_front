import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, skip, takeUntil} from 'rxjs/operators';
import {of, throwError} from 'rxjs';
import _ from 'lodash';

import * as ConnectionActions from './connection.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {Message} from '../../messages/message.model';
import {MessageType} from '../../messages/message-type.enum';
import {BleScanService} from '../../bluetooth-services/ble-scan.service';
import {BleConnectService} from '../../bluetooth-services/ble-connect.service';
import {ConnectionService} from '../service/connection.service';

@Injectable()
export class ConnectionEffects {

  @Effect()
  scan = this.actions$.pipe(
    ofType(ConnectionActions.SCAN_START),
    switchMap((scanAction: ConnectionActions.ScanStart) => {
      console.log('scan start effect');
      return this.bleScanService.startScan()
        .pipe(
          skip(1),
          map(devices => {
            if (devices) {
              return new ConnectionActions.ScanSuccess({
                optionalDevices: devices,
                successMessage: new Message(ConnectionActions.SCAN_START, MessageType.SUCCESS, {
                  defaultMessage: 'Scan Successful!'
                })
              });
            } else {
              return new ConnectionActions.ScanFailure({
                errorMessage: new Message(ConnectionActions.SCAN_START, MessageType.ERROR, {
                  defaultMessage: 'Scan Error!'
                })
              });
            }
          }),
          catchError(errorRes => {
            return of(new ConnectionActions.ScanFailure({
              errorMessage: new Message(ConnectionActions.SCAN_START, MessageType.ERROR, {
                defaultMessage: errorRes.error && errorRes.error.err ? errorRes.error.err : 'Scan Error!'
              })
            }));
          })
        );
    })
  );

  @Effect()
  pair = this.actions$.pipe(
    ofType(ConnectionActions.PAIR_START),
    switchMap((pairAction: ConnectionActions.PairStart) => {
      return this.connectionService
        .bluetoothPair({device: pairAction.payload.device})
        .pipe(
          map(pairResponse => {
            if (pairResponse.device) {
              return new ConnectionActions.PairSuccess({
                device: pairResponse.device,
                successMessage: new Message(ConnectionActions.PAIR_START, MessageType.SUCCESS, {
                  defaultMessage: 'Pair Successful!'
                })
              });
            } else {
              return new ConnectionActions.PairFailure({
                errorMessage: new Message(ConnectionActions.PAIR_START, MessageType.ERROR, {
                  defaultMessage: 'Pair Error!'
                })
              });
            }
          }),
          catchError(errorRes => {
            return of(new ConnectionActions.ScanFailure({
              errorMessage: new Message(ConnectionActions.PAIR_START, MessageType.ERROR, {
                defaultMessage: errorRes.error && errorRes.error.err ? errorRes.error.err : 'Pair Error!'
              })
            }));
          })
        );
    })
  );

  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions,
    private router: Router,
    private connectionService: ConnectionService,
    private bleScanService: BleScanService,
    private bleConnectService: BleConnectService
  ) {}
}
