import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import {of, throwError} from 'rxjs';
import _ from 'lodash';

import * as ConnectionActions from './connection.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {Message} from '../../messages/message.model';
import {MessageType} from '../../messages/message-type.enum';
import {ConnectionService} from '../service/connection.service';
import {Device} from '../models/device.model';

@Injectable()
export class ConnectionEffects {

  @Effect()
  scan = this.actions$.pipe(
    ofType(ConnectionActions.SCAN_START),
    switchMap((scanAction: ConnectionActions.ScanStart) => {
      return this.connectionService
        .bluetoothScan({})
        .pipe(
          map(scanResponse => {
            if (scanResponse.devices) {
              return new ConnectionActions.ScanSuccess({
                optionalDevices: scanResponse.devices,
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
    private connectionService: ConnectionService
  ) {}
}
