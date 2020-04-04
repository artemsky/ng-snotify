import { SnotifyTypeType } from '../types/snotify-type.type';
import { Snotify } from '../interfaces/snotify.interface';

/**
 * Defines toast style depending on method name
 * @param target any
 * @param propertyKey SnotifyTypeType
 * @param descriptor PropertyDescriptor
 * @returns value: ((...args: any[]) => any)
 */
export function SetToastType(target: any, propertyKey: SnotifyTypeType, descriptor: PropertyDescriptor) {
  return {
    value(...args: any[]) {
      (args[0] as Snotify).config = {
        ...(args[0] as Snotify).config,
        type: propertyKey
      };
      return descriptor.value.apply(this, args);
    }
  };
}
