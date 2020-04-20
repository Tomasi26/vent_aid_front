import {AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import _ from 'lodash';

import * as fromApp from '../../store/app.reducer';
import {ActivatedRoute, Router} from '@angular/router';
import {Message} from '../../messages/message.model';
import * as fromConnectionState from '../../connection/store/connection.state';
import * as fromConnectionActions from '../../connection/store/connection.actions';
import * as fromConnectionSelectors from '../../connection/store/connection.selectors';
import {Device} from '../models/device.model';

@Component({
  selector: 'app-login',
  templateUrl: './pair.component.html',
  styleUrls: ['./pair.component.scss']
})
export class PairComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {

  // vent output store
  device: Device;
  optionalDevices: Device[];
  devicesHistory: Device[];
  connectionLoading = false;
  connectionError: Message = null;
  connectionSuccess: Message = null;
  deviceSub: Subscription;
  optionalDevicesSub: Subscription;
  devicesHistorySub: Subscription;
  connectionLoadingSub: Subscription;
  connectionErrorSub: Subscription;
  connectionSuccessSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
    private connectionStore: Store<fromConnectionState.ConnectionState>) {}

  ngOnInit() {
    // subscribe to vent output state
    this.subscribeConnectionStateObservables();

  }

  // connection state
  subscribeConnectionStateObservables() {

    // device
    this.deviceSub = this.connectionStore.pipe(
      select(fromConnectionSelectors.selectDevice)
    ).subscribe(device => {
      this.device = device;
    });

    // optional devices
    this.optionalDevicesSub = this.connectionStore.pipe(
      select(fromConnectionSelectors.selectOptionalDevices)
    ).subscribe(optionalDevices => {
      this.optionalDevices = _.values(optionalDevices);
    });

    // devices history
    this.devicesHistorySub = this.connectionStore.pipe(
      select(fromConnectionSelectors.selectDevicesHistory)
    ).subscribe(devicesHistory => {
      this.devicesHistory = _.values(devicesHistory);
    });

    // loading
    this.connectionLoadingSub = this.connectionStore.pipe(
      select(fromConnectionSelectors.selectConnectionLoading)
    ).subscribe(connectionLoading => {
      this.connectionLoading = connectionLoading;
    });

    // success message
    this.connectionSuccessSub = this.connectionStore.pipe(
      select(fromConnectionSelectors.selectConnectionSuccess)
    ).subscribe(connectionSuccess => {
      this.connectionSuccess = connectionSuccess;
    });

    // error message
    this.connectionErrorSub = this.connectionStore.pipe(
      select(fromConnectionSelectors.selectConnectionError)
    ).subscribe(connectionError => {
      this.connectionError = connectionError;
    });

  }

  unsubscribeConnectionStateObservables() {

    if (this.deviceSub) {
      this.deviceSub.unsubscribe();
    }
    if (this.optionalDevicesSub) {
      this.optionalDevicesSub.unsubscribe();
    }
    if (this.devicesHistorySub) {
      this.devicesHistorySub.unsubscribe();
    }
    if (this.connectionLoadingSub){
      this.connectionLoadingSub.unsubscribe();
    }
    if (this.connectionSuccessSub){
      this.connectionSuccessSub.unsubscribe();
    }
    if (this.connectionErrorSub){
      this.connectionErrorSub.unsubscribe();
    }

  }


  ngAfterViewInit() {
  }

  ngAfterContentInit() {
  }

  ngOnDestroy() {
    // unsubscribe to vent output state
    this.unsubscribeConnectionStateObservables();
  }


}
