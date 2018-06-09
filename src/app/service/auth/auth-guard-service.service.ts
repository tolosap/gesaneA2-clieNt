import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { SessionService } from '../session.service';

@Injectable()
export class AuthGuardServiceService implements CanActivate {

  constructor(public auth: AuthServiceService, public router: Router, public actRoute: ActivatedRoute, public sess: SessionService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // const expectedRole = route.data.expectedRole;
    const roles: String = route.data.expectedRole;
    let temp = new Array();
    temp = roles.split(',');
    if ( !this.auth.isAuthenticated(temp, temp.length) && !this.sess.isSessionActive()) {
      this.router.navigate(['/login']);
      return false;
    }
    if ( !this.auth.isAuthenticated(temp, temp.length)) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }

}
