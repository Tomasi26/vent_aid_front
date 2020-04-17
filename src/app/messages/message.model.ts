import {MessagePayload} from './message-payload';
import {MessageType} from './message-type.enum';

export class Message {

  constructor(action, type, options: {payload?: MessagePayload, defaultMessage?: string} = {}) {

    this.action = action;

    this.type = type;

    this.payload = options && options.payload ? options.payload : {};

    if (options && options.defaultMessage) {
      this.defaultMessage = options.defaultMessage;
    } else if (type === MessageType.SUCCESS) {
      this.defaultMessage = 'Success!';
    } else if (type === MessageType.ERROR) {
      this.defaultMessage = 'Error!';
    } else if (type === MessageType.WARNING) {
      this.defaultMessage = 'Warning!';
    } else {
      this.defaultMessage = '';
    }

  }

  public action: string;

  public type: MessageType;

  public payload: MessagePayload;

  public defaultMessage: string;

}
