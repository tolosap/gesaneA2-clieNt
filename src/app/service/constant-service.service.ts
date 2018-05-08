import { Injectable } from '@angular/core';

@Injectable()
export class ConstantServiceService {
  constructor() {}

  getAppUrl() {
    return 'http://localhost:8081/gesane/json';
    // return location.protocol + '//' + location.hostname + ':' + location.port + '/' + this.getAppName() + '/index.php';
  }
  getCAppUrl() {
    return 'http://127.0.0.1:8080/gesane/public_html';
    // Acordarse de mirar esta URL!!!!
    // return location.protocol + '//' + location.hostname + ':' + location.port + '/' + this.getAppName() + '/index.php';
  }
  debugging() {
    return 1;
  }
  getGlobalNeighbourhood() {
    return 2;
  }
}
