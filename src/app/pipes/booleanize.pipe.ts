// Importamos los componentes necesarios
import { Pipe, PipeTransform } from '@angular/core';
import { ToolService } from '../service/tool.service';

// Le ponemos un nombre a la tuberia
@Pipe({ name: 'Booleanize' })
export class BooleanizePipe implements PipeTransform {
  constructor(private toolService: ToolService) {}

  transform(input): any {
    if (input == null) {
        return '';
    }

    if (input === true) {
        return '<i fa class="fa fa-check"></i>';
    } else {
        return '<i fa class="fa fa-times"></i>';
    }
  }

}
