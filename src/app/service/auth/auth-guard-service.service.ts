import { AuthServiceService } from './auth-service.service';
import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { SessionService } from '../session.service';

@Injectable()
export class AuthGuardServiceService implements CanActivate {

  constructor(public auth: AuthServiceService,
    public router: Router,
    public actRoute: ActivatedRoute,
    public sess: SessionService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // Aqui empieza la magia
    // Para obtener el :profile, cogemos la url completa y la pasamos a string, veremos por ejemplo: paciente,4,plist,1,10
    // Lo convertimos a String y separamos con split, despues ya tenemos el :profile a nuestra disposicion
    const profileNumb: String = route.url.toString();
    let arrayUrl = new Array();
    arrayUrl = profileNumb.split(',');

    // Recogemos los datos de expectedRole
    const roles: String = route.data.expectedRole;
    let temp = new Array();
    temp = roles.split(',');

    if ( !this.auth.amIAbleTo(temp, temp.length, arrayUrl[1]) && !this.sess.isSessionActive()) {
      this.router.navigate(['/login']);
      return false;
    }
    if ( !this.auth.amIAbleTo(temp, temp.length, arrayUrl[1])) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }

}
