import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { ConstantServiceService } from './constant-service.service';
import * as sha256 from 'sha256';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SessionServerCallService {
  constructor(
    private connection: HttpClient,
    private constantService: ConstantServiceService
  ) {}

  login(username, password) {
    password = sha256(password).toUpperCase();
    return this.connection.get(
      this.constantService.getAppUrl() +
        '?ob=usuario&op=login&user=' +
        username +
        '&pass=' +
        password, { withCredentials: true }
    ).map((response: Response) => response.json());
  }

  setPass(oldpass, newpass) {
    const oldpassword = sha256(oldpass).toUpperCase();
    const newpassword = sha256(newpass).toUpperCase();
    return this.connection.get(
      this.constantService.getAppUrl() +
        '?ob=usuario&op=setpass&old=' +
        oldpassword +
        '&new=' +
        newpassword, { withCredentials: true }
    ).map((response: Response) => response.json());
  }

  logout() {
    return this.connection.get(
      this.constantService.getAppUrl() + '?ob=usuario&op=logout', { withCredentials: true }
    ).map((response: Response) => response.json());
  }

  checkSession() {
    return this.connection.get(
      this.constantService.getAppUrl() + '?ob=usuario&op=getsessionstatus', { withCredentials: true }
    ).map((response: Response) => response.json());
  }
}
