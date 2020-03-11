import {SnotifyType} from '../types/snotify.type'
import {Snotify} from '../interfaces/Snotify.interface';

/**
 * Defines toast style depending on method name
 * @param target
 * @param propertyKey SnotifyType
 * @param descriptor PropertyDescriptor
 * @returns value: ((...args: any[]) => any)
 */
export function SetToastType (target: any, propertyKey: SnotifyType, descriptor: PropertyDescriptor) {
  return {
    value: function (...args: any[]) {
      (args[0] as Snotify).config = {
        ...(args[0] as Snotify).config,
        type: propertyKey
      };
      return descriptor.value.apply(this, args);
    }
  };
}
