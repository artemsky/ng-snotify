import {SnotifyType} from '../types/snotify.type'
import {ToastDefaults} from '../toastDefaults';
import {Snotify} from '../interfaces/Snotify.interface';
import {mergeDeep} from '../utils';

export function SetDefaultConfig (target: any, propertyKey: SnotifyType, descriptor: PropertyDescriptor) {
  const defaultConfig = ToastDefaults.toast[propertyKey];
  if (!defaultConfig) {
    throw new Error(`Looks like you don't have default configuration for [${propertyKey}] type`);
  }
  return {
    value: function (...args: any[]) {
      (args[0] as Snotify).config = mergeDeep(ToastDefaults.global, defaultConfig);
      return descriptor.value.apply(this, args);
    }
  };
}
