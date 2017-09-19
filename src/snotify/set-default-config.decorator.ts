import {SnotifyType} from './enum/SnotifyType.enum';
import {ToastDefaults} from './toastDefaults';
import {Snotify} from './interfaces/Snotify.interface';
import {mergeDeep} from './utils';

export function SetDefaultConfig (target: any, propertyKey: SnotifyType, descriptor: PropertyDescriptor) {
  const defaultConfig = ToastDefaults[propertyKey];
  if (!defaultConfig) {
    throw new Error(`Looks like you don't have default configuration for [${propertyKey}] type`);
  }
  return {
    value: function (...args: any[]) {
      (args[0] as Snotify).config = mergeDeep(ToastDefaults.global.config, defaultConfig);
      return descriptor.value.apply(this, args);
    }
  };
}
