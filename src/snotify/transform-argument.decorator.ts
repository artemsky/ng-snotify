import {Snotify} from './interfaces/Snotify.interface';

export function TransformArgument (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  return {
    value: function (...args: any[]) {
      let result;
      if (args.length === 1) {
        result = {
          title: null,
          body: args[0],
          config: null
        }
      } else if (args.length === 3) {
        result = {
          title: args[1],
          body: args[0],
          config: args[2]
        }
      } else {
        result = {
          title: null,
          config: null,
          body: args[0],
          [typeof args[1] === 'string' ? 'title' : 'config']: args[1]
        };
      }
      return descriptor.value.apply(this, [result as Snotify]);
    }
  };
}
