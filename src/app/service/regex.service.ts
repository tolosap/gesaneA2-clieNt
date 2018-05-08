import { Injectable } from '@angular/core';

@Injectable()
export class RegexService {
  constructor() {}

  getRegExpr(reg) {
    switch (reg) {
      case 'nombre':
        return /^([A-Z]{1}[a-zñáéíóúàèò]+[\s]*)+$/;
      case 'palabra':
        return '^([a-z]{1}[a-zñáéíóúàèò]+[s]*)+$';
      case 'codigopostal':
        return '^d{4,5}$';
      case 'email':
        return '^[a-z]+[a-z0-9._]+@[a-z]+.[a-z.]{2,5}$';
        // return new RegExp('([\w-\.]+@[\w\.]+\.{1}[\w]+)', 'g');
      case 'telefono':
        return '^[d]{3}[-]*([d]{2}[-]*){2}[d]{2}$';
      case 'login':
        return '^[a-z0-9_-]{5,16}$';
      case 'password':
        return '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$';
      case 'integer':
        return new RegExp('-?[0-9]+', 'g');
      case 'decimal':
        return '^d+(?:.d{1,2})?$';
      case 'alpha-numeric':
        return new RegExp('^[a-zA-Z0-9]+$', 'g');
      case 'url':
        return new RegExp('(http://|ftp://)([w-.)(.)([a-zA-Z]+)', 'g');
      case 'dni':
        return /^[0-9]{8,8}[A-Z]$/;
      case 'dni2':
        return new RegExp('^[0-9]e{8,8}[A-Z]$', 'g');
      default:
        return null;
    }
  }

  getRegExpl(reg) {
    switch (reg) {
      case 'nombre':
        return 'Las palabras deben comenzar con mayúsculas';
      case 'palabra':
        return 'No se pueden introducir números, solo palabras en minúscula';
      case 'codigopostal':
        return 'Se requieren 4 o 5 dígitos';
      case 'email':
        return 'Introduzca un email válido';
      case 'telefono':
        return 'Introduzca un número de 9 dígitos';
      case 'login':
        return 'Introduza una palabra de 5 a 16 caracteres alfanuméricos';
      case 'password':
        return 'Introduzca palabra de al menos 8 caracteres con numeros y letras mayúsculas y minúsculas';
      case 'integer':
        return 'Introduzca un número entero';
      case 'decimal':
        return 'Introduzca un número decimal (decimal=punto) con dos decimales';
      case 'alpha-numeric':
        return 'Introduzca una cadena de números y letras';
      case 'url':
        return 'Introduza una URL válida';
      case 'dni':
        return 'Introduzca un DNI de 8 digitos y una letra mayúscula.';
      default:
        return null;
    }
  }
}
