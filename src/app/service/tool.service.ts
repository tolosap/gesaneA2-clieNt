import { Injectable } from '@angular/core';

@Injectable()
export class ToolService {
  constructor() {}

  checkDefault(defaultValue, checkedletiable) {
    if (!checkedletiable || checkedletiable < 1) {
      return defaultValue;
    } else {
      return checkedletiable;
    }
  }
  checkNull(checkedletiable) {
    if (checkedletiable) {
      return checkedletiable;
    } else {
      return null;
    }
  }
  checkEmptyString(checkedletiable) {
    if (checkedletiable) {
      return checkedletiable;
    } else {
      return '';
    }
  }
  // --------
  date_toDate(input) {
    const parts = input.split('/');
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }
  date_toDate2(input) {
    const parts = input.split('-');
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }
  datetime_toString(input) {
    const arrinputdate = input.split(' ');
    const fecha_partes = arrinputdate[0].split('/');
    const hora_partes = arrinputdate[1].split(':');
    const newDate = new Date(
      fecha_partes[2],
      fecha_partes[1] - 1,
      fecha_partes[0],
      hora_partes[0],
      hora_partes[1]
    );
    // return $filter('date')(newDate, 'dd/MM/yyyy HH:mm');
  }
  array_identificarArray(arr) {
    const newObj = {};
    for (const property in arr) {
      if (arr.hasOwnProperty(property)) {
        if (property.match('^obj_')) {
          newObj[property.replace('obj_', 'id_')] = arr[property].data.id;
        } else {
          if (!property.match('^link_')) {
            newObj[property] = arr[property];
          }
        }
      }
    }
    return newObj;
  }
  // ----------------------------
  calculatePages(regsPerPage, totalRegisters) {
    let pages = Math.floor(totalRegisters / regsPerPage);
    const remainderPages = totalRegisters % regsPerPage;
    if (remainderPages > 0) {
      pages++;
    }
    return pages;
  }
  // -----
  getRangeArray(lowEnd, highEnd) {
    const rangeArray = [];
    for (let i = lowEnd; i <= highEnd; i++) {
      rangeArray.push(i);
    }
    return rangeArray;
  }
  evaluateMin(lowEnd, highEnd) {
    return Math.min(lowEnd, highEnd);
  }
  evaluateMax(lowEnd, highEnd) {
    return Math.max(lowEnd, highEnd);
  }
  capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  getFilterExpression(filter, sfilter) {
    if (this.checkEmptyString(filter)) {
      return this.checkEmptyString(filter);
    }
    if (this.checkEmptyString(sfilter)) {
      if (this.checkEmptyString(filter)) {
        return (
          this.checkEmptyString(filter) + '+' + this.checkEmptyString(sfilter)
        );
      } else {
        return this.checkEmptyString(sfilter);
      }
    }
  }
  getFilter(filter) {
    let filterParams = null;
    if (filter) {
      if (Array.isArray(filter)) {
        const arrayLength = filter.length;
        for (let i = 0; i < arrayLength; i++) {
          if (i > 0) {
            filterParams += '&filter=';
          }
          filterParams += filter[i];
        }
      } else {
        filterParams = filter;
      }
    }
    return filterParams;
  }
  isEmpty(obj) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }
  getParamString(paramArray) {
    let newParamStr = '';
    if (paramArray) {
      for (let i = 0; i < paramArray.length; i++) {
        if (i !== 0) {
          newParamStr += '&';
        }
        for (let j = 0; j < paramArray[i].length; j++) {
          if (j !== 0) {
            newParamStr += ',';
          }
          newParamStr += paramArray[i][j];
        }
      }
    }
    return newParamStr;
  }

  getUrlFromParams(ob, op, numpage, rpp, ufilter, uorder) {
    let ruta = ob + '/' + op + '/' + numpage + '/' + rpp;
    ruta += '/' + this.getParamString(ufilter);
    ruta += '/' + this.getParamString(uorder);
    return ruta;
  }

  deleteForeignKey(metap, obj) {
    for (let j = 0; j < metap.length; j++) {
      if (metap[j].Name === obj) {
        metap.splice(j, 1);
        return metap;
      }
    }
  }
  deleteForeignKeyObject(bean, obj) {
    delete bean[obj];
    return bean;
  }

  booleanTo1or0(bean) {
    if (bean['activo'] === false) {
    bean['activo'] = '0';
   }
   if (bean['activo'] === true) {
    bean['activo'] = '1';
   }
   if (bean['validado'] === false) {
    bean['validado'] = '0';
   }
   if (bean['validado'] === true) {
    bean['validado'] = '1';
   }
   return bean;
  }
}
