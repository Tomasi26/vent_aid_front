import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BleConnectService {

  public foundServicesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public characteristicSubject: BehaviorSubject<Uint8Array> = new BehaviorSubject<Uint8Array>(new Uint8Array());

  private services = [];

  constructor() { }

  successLog(result){
    console.log(result)
  }

  connect(address) {
    console.log('Connecting to device: ' + address + "...", "status");
    bluetoothle.wasConnected((result)=>{
      console.log("Already connected.");
      this.getDeviceServices(address);
    }, () =>{
      bluetoothle.stopScan((result)=>console.log(result), this.handleError);
      new Promise((resolve, reject) => {
        bluetoothle.connect(resolve, reject, { address: address });
      }).then((result)=>this.connectSuccess(result), (error)=>this.handleError(error));
    }, { address: address });
  }

  disconnect(address){
    bluetoothle.disconnect(()=>console.log("disconnected"),
      ()=>console.log("error disconnected"), {address: address})
  }

  connectSuccess(result){
    console.log(result);
    console.log("- " + result.status);
    if (result.status === "connected") {
      this.getDeviceServices(result.address);
    }
    else if (result.status === "disconnected") {
      console.log("Disconnected from device: " + result.address, "status");
    }
  }

  getDeviceServices(address){
    console.log("Getting device services...", "status");
    new Promise(function (resolve, reject) {
      bluetoothle.discover(resolve, reject,
        { address: address });
    }).then((result)=>this.discoverSuccess(result), (error)=>this.handleError(error));
  }

  discoverSuccess(result){
    console.log("Discover returned with status: " + result.status);
    if (result.status === "discovered") {
      // Create a chain of read promises so we don't try to read a property until we've finished
      // reading the previous property.
      let readSequence = result.services.reduce((sequence, service) => {
        return sequence.then(() => {
          return this.addService(result.address, service.uuid, service.characteristics);
        });
      }, Promise.resolve());
      // Once we're done reading all the values, disconnect
      readSequence.then(() => {
        new Promise((resolve, reject) => {
          bluetoothle.disconnect(resolve, reject,
            { address: result.address });
        }).then((result)=>this.connectSuccess(result), (error)=>this.handleError(error))
      });
    }
  }

  characteristicsSuccess(result) {
    console.log("characteristicsSuccess()");
    console.log(result);
    if (result.status === "characteristics") {
      return this.addService(result.address, result.service, result.characteristics);
    }
  }

  addService(address, serviceUuid, characteristics) {
    console.log('Adding service ' + serviceUuid + '; characteristics:');
    console.log(characteristics);

    let readSequence = Promise.resolve();

    characteristics.forEach((characteristic) => {
      readSequence = readSequence.then(() => {
        return new Promise((resolve, reject) => {
          bluetoothle.read(resolve, reject,
            {address: address, service: serviceUuid, characteristic: characteristic.uuid});
        }).then((result) => this.readSuccess(result), (error)=>this.handleError(error));

      });
    });
    return readSequence;
  }

  readSuccess(result) {
    console.log("readSuccess():", result);
    if (result.status === "read") {
      this.reportValue(result.service, result.characteristic, window.atob(result.value));
      this.services.push(result.service);
      this.foundServicesSubject.next(this.services);
    }
  }

  reportValue(serviceUuid, characteristicUuid, value) {
    console.log('serviceUuid: ',serviceUuid,' CharacteristicUuid: ',characteristicUuid);
    console.log(value);
  }


  subscribe(address,serviceUuid,characteristicUuid){
    bluetoothle.subscribe((result)=>this.subscribeSuccess(result),
      (error)=>this.handleError(error), {
      "address": address,
      "service": serviceUuid,
      "characteristic": characteristicUuid,
    });
  }

  subscribeSuccess(result){
    if(result.status == 'subscribed'){
      console.log('subscribe success');
    }else if(result.status == 'subscribedResult'){
      console.log(result.value);
      console.log(bluetoothle.encodedStringToBytes(result.value));
      this.characteristicSubject.next(bluetoothle.encodedStringToBytes(result.value));
    }
  }


  handleError(error) {
    console.log("error: ", error);
  }
}
