import {VentDataType} from '../dashboard.enums';

export class VentData {

  constructor() {
    this.type = VentDataType.none;
    this.name = null;
    this.data = null;
    this.enable = false;
    this.readOnly = false;
  }

  public type: VentDataType;
  public name: string;
  public data: string;
  public enable: boolean;
  public readOnly: boolean;
}
