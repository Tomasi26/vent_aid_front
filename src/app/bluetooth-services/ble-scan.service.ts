import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BleScanService {

  constructor() { }

  init() {
    document.addEventListener('deviceready', () => {
      new Promise((resolve) => {
        bluetoothle.initialize(resolve, {request: true, statusReceiver: false});
      }).then(this.initializeSuccess, this.handleError);
    });
  }

  initializeSuccess(result){
    if (result.status === 'enabled') {

      console.log('Bluetooth is enabled.');
      console.log(result);
    }

    else {

      // document.getElementById('start-scan').disabled = true;

      console.log('Bluetooth is not enabled:', 'status');
      console.log(result, 'status');
    }
  }
  handleError(error) {
    let msg;
    if (error.error && error.message) {
      const errorItems = [];
      if (error.service) {
        // errorItems.push('service: ' + (uuids[error.service] || error.service));
      }
      if (error.characteristic) {
        // errorItems.push('characteristic: ' + (uuids[error.characteristic] || error.characteristic));
      }
      msg = 'Error on ' + error.error + ': ' + error.message + (errorItems.length && (' (' + errorItems.join(', ') + ')'));
    }
    else {
      msg = error;
    }
    console.log(msg, 'error');
    if (error.error === 'read' && error.service && error.characteristic) {
      // reportValue(error.service, error.characteristic, 'Error: ' + error.message);
    }
  }


  private foundDevices = [];

  startScan() {

    console.log("Starting scan for devices...", "status");

    this.foundDevices = [];

    document.getElementById("devices").innerHTML = "";
    document.getElementById("services").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    // if (window.cordova.platformId === "windows") {
    //   bluetoothle.retrieveConnected(this.retrieveConnectedSuccess, this.handleError, {});
    // }
    // else {
    //   bluetoothle.startScan(this.startScanSuccess, this.handleError, { services: [] });
    // }
  }

  retrieveConnectedSuccess(result) {
    console.log("retrieveConnectedSuccess()");
    console.log(result);
    result.forEach(function (device) {
      this.addDevice(device.name, device.address);
    });
  }

  addDevice(name, address) {

    let button = document.createElement("button");
    button.style.width = "100%";
    button.style.padding = "10px";
    button.style.fontSize = "16px";
    button.textContent = name + ": " + address;

    button.addEventListener("click", function () {

      document.getElementById("services").innerHTML = "";
      // connect(address);
    });

    document.getElementById("devices").appendChild(button);
  }
}
