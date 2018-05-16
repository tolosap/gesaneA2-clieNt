import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fechaFormateada' })
export class FechaFormateadaPipe implements PipeTransform {
  constructor() {}

  transform(input) {
    if (input == null || input === '' || input.length !== 10) {
      return '';
    }
    const arr = input.split('/'); // formato dd/mm/aaaa
    // tslint:disable-next-line:radix
    let mm = parseInt(arr[1]);
    mm -= 1;
    const newDate = new Date(arr[2], mm, arr[0]);
    // const formatedDate = $filter('date')(newDate, 'EEEE, dd \'de\' MMMM \'de\' yyyy');
    // const formatedDate = ('date')(newDate, 'EEEE, dd \'de\' MMMM \'de\' yyyy');
    return newDate;
  }
}
