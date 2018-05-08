import { Injectable } from '@angular/core';

@Injectable()
export class SharedSpaceService {
  constructor() {}
  obj = {};
  link = '';
  fase = 0;

  getObject() {
    return this.obj;
  }
  setObject(value) {
    this.obj = value;
  }
  getReturnLink() {
    return this.link;
  }
  setReturnLink(value) {
    this.link = value;
  }
  getFase() {
    return this.fase;
  }
  setFase(value) {
    this.fase = value;
  }
}
