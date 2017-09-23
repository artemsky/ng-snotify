import {SnotifyType} from '../types/snotify.type'
import {Snotify} from '../interfaces/Snotify.interface';

export function SetToastType (target: any, propertyKey: SnotifyType, descriptor: PropertyDescriptor) {
  return {
    value: function (...args: any[]) {
      (args[0] as Snotify).config.type = propertyKey;
      return descriptor.value.apply(this, args);
    }
  };
}
