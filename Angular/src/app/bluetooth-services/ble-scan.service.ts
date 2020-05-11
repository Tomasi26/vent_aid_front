import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map, skip, tap} from 'rxjs/operators';


const VENT_AID_SERVICE_UUID = '123';
const SCAN_TIMEOUT = 1000;


@Injectable({
  providedIn: 'root'
})
export class BleScanService {
  public foundDevicesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private foundDevices = [];
  public isInitializedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  init() {
    this.isPermissionLocationEnabled();
    bluetoothle.isInitialized((isInitialize) => {
      if (!isInitialize.isInitialized){
        document.addEventListener('deviceready', () => {
          new Promise((resolve) => {
            bluetoothle.initialize(resolve, {request: true, statusReceiver: false});
          }).then((result) => {this.initializeSuccess(result); },
            (error) => {
              this.isInitializedSubject.error('Error initialize bluetooth!');
            });
        });
      }
    });
    return this.isInitializedSubject;
  }

  isPermissionLocationEnabled(){
    bluetoothle.hasPermission((result) => {
      if (!result.hasPermission){
        bluetoothle.requestPermission(this.successLog);
      }
    });
  }

  successLog(result){
    console.log(result);
  }

  initializeSuccess(result){
    if (result.status === 'enabled') {
      this.isInitializedSubject.next(true);
    }
    else {
      bluetoothle.enable((_) => {
        this.isInitializedSubject.next(true);
      }, (error) => {
        this.isInitializedSubject.error('Error initialize bluetooth!');
      });
    }
  }

  refresh(){
    console.log('refresh');
    bluetoothle.disable(() => {bluetoothle.enable((result) => {
      console.log(result);
    }, this.handleError);
    }, this.handleError);
  }

  startScan() {
    this.foundDevices = [];
    this.init().pipe(
      skip(1),
      tap( isInitialized => {
          if (isInitialized) {
            bluetoothle.startScan((result) => this.startScanSuccess(result),
              (error) => this.handleError(error), { services: [VENT_AID_SERVICE_UUID] });
            setTimeout (() => {
              this.stopScan();
            }, SCAN_TIMEOUT);
          } else {
            this.foundDevicesSubject.next([]);
          }
        }
      )
    );
    return this.foundDevicesSubject;
  }

  stopScan() {
    bluetoothle.stopScan((result) => console.log(result), this.handleError);
  }

  startScanSuccess(result){
    if (result.status === 'scanStarted') {
      console.log('Scanning for devices (will continue to scan until you select a device)...', 'status');
    }
    else if (result.status === 'scanResult') {
      if (!this.foundDevices.some( (device) => {
        return device.address === result.address;
      })) {
        console.log('FOUND DEVICE:');
        console.log(result);
        this.foundDevices.push(result);
        this.foundDevicesSubject.next(this.foundDevices);
      }
    }
  }

  handleError(error) {
    console.log('error: ', error);

    // var msg;
    // if (error.error && error.message) {
    //   var errorItems = [];
    //   if (error.service) {
    //     errorItems.push('service: ' + ((uuids)[error.service] || error.service));
    //   }
    //   if (error.characteristic) {
    //     // errorItems.push('characteristic: ' + ((this.uuids)[error.characteristic] || error.characteristic));
    //   }
    //   msg = 'Error on ' + error.error + ': ' + error.message + (errorItems.length && (' (' + errorItems.join(', ') + ')'));
    // }
    // else {
    //   msg = error;
    // }
    // console.log(msg, 'error');
    // if (error.error === 'read' && error.service && error.characteristic) {
    //   // reportValue(error.service, error.characteristic, 'Error: ' + error.message);
    // }
  }
}
