import {SnotifyType} from '../types/snotify.type'
import {Snotify} from '../interfaces/Snotify.interface';

export function SetToastType (target: any, propertyKey: SnotifyType, descriptor: PropertyDescriptor) {
  return {
    value: function (...args: any[]) {
      console.log(args[0], propertyKey);
      (args[0] as Snotify).config = {
        ...(args[0] as Snotify).config,
        type: propertyKey
      };
      return descriptor.value.apply(this, args);
    }
  };
}
