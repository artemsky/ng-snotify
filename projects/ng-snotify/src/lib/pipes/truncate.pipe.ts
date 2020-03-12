import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

/**
 * Truncate toast text pipe
 */
export class TruncatePipe implements PipeTransform {
  transform(value: string, ...args: Array<any>): any {
    let limit = 40;
    let trail = '...';
    if (args.length > 0) {
      limit = args.length > 0 ? parseInt(args[0], 10) : limit;
      trail = args.length > 1 ? args[1] : trail;
    }

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
