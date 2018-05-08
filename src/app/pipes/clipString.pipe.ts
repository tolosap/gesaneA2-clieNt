import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ClipString'})
export class ClipStringPipe implements PipeTransform {

  transform(input): any {
    if (input == null) {
        return '';
    }

    if (input.length > 50) {
        return input.substr(0, 25).trim() + ' ...';

    } else {
        return input;
    }
  }

}
