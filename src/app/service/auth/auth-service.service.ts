import { Injectable } from '@angular/core';
import { SessionService } from '../session.service';

@Injectable()
export class AuthServiceService {

  constructor(public sessionService: SessionService) { }

  public amIAbleTo(value, length, profile): boolean {
    if ( profile === localStorage.getItem('profile')) {
      for ( let i = 0; i < length; i++) {
        if ( value[i] === localStorage.getItem('profile')) {
          return true;
        }
      }
    }
    return false;
  }

}
