// Importamos los componentes necesarios
import { Pipe, PipeTransform } from '@angular/core';
import { ToolService } from '../service/tool.service';

// Le ponemos un nombre a la tuberia
@Pipe({ name: 'GetForeignDescription' })
export class GetForeignDescPipe implements PipeTransform {
  constructor(private toolService: ToolService) {}

  transform(foreignObject): any {
    if (!this.toolService.isEmpty(foreignObject.data)) {
      if (foreignObject.data.id > 0) {
        const arrayLength = foreignObject.metaProperties.length;
        let description = '';
        for (let i = 0; i < arrayLength; i++) {
          if (foreignObject.metaProperties[i].IsForeignKeyDescriptor) {
            description +=
              foreignObject.data[foreignObject.metaProperties[i].Name] + ' ';
          }
        }
        return description.trim();
      } else {
        return '';
      }
    } else {
      return '';
    }
  }
}
