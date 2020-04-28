export class Device {
  constructor(
    public id: string = null,
    public address: string = null,//address: "5F:D9:2D:D1:76:C8"
    public advertisement: string = null, //"AgEaAgoMCv9MABAFQRhVZMsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
    public name: string = null, //"TV 5"
    public rssi: number = null, //-95
    public status: string = null //"scanResult"
  ) {}
}
