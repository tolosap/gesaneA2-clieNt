import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuardServiceService implements CanActivate {

  constructor(public auth: AuthServiceService, public router: Router, public actRoute: ActivatedRoute
  ) { }

  canActivate() {
    return true;
  }

}
