import { Injectable } from '@angular/core';
import { SessionService } from '../session.service';

@Injectable()
export class AuthServiceService {

  constructor(public sessionService: SessionService) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    //const tipouser =
    // Check whether the token is expired and return
    // true or false
    return false;
  }

}
