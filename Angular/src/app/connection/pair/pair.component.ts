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
import {BleScanService} from '../../bluetooth-services/ble-scan.service';
import {BleConnectService} from '../../bluetooth-services/ble-connect.service';


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

  services: any[];
  connectedDevice: string;
  isConnected: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
    private connectionStore: Store<fromConnectionState.ConnectionState>,
    private bleScanService: BleScanService,
    private bleConnectService: BleConnectService) {}

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

  onBluetooth(){
    this.bleScanService.foundDevicesSubject.subscribe((deveices) => {
      console.log(deveices);
      deveices.map((val) => {
        return new Device(null,val.address,val.advertisement,val.name,val.rssi);
      }).forEach(d => this.optionalDevices.push(d))
    });
    this.bleScanService.init();
  }

  onStartScan(){
    this.isConnected = false;
    this.bleScanService.startScan();
  }

  onStopScan(){
    this.bleScanService.stopScan();
  }
  onDisconnect(){
    this.bleConnectService.disconnect(this.connectedDevice);
    this.connectedDevice = '';
  }

  onConnect(device: Device){
    this.bleConnectService.foundServicesSubject.subscribe((services)=>{console.log(services)});
    this.bleConnectService.connect(device.address);
    this.connectedDevice = device.address;
    this.isConnected = true;
  }

}
