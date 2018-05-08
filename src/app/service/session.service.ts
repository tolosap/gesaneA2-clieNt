import { Injectable } from '@angular/core';
import { SessionServerCallService } from './session-server-call.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class SessionService {
  constructor(
    private sessionServerCS: SessionServerCallService, private router: Router
  ) {}

  isSessionActiveTF = false;
  sessionInfo = null;
  nextUrl = null;
  allData = null;
  variable;
  variable2;
  data = Array<Object>();

  anyAuthenticationPromise() {
    this.sessionServerCS.checkSession().subscribe(
      response => {
        this.variable = response;
        if (this.variable.status === 200) {
          this.isSessionActiveTF = true;
          this.sessionInfo = this.variable.json.data;
        } else {
          this.isSessionActiveTF = false;
          if (
            this.nextUrl !== '/' &&
            this.nextUrl !== '/home' &&
            this.nextUrl !== '/login' &&
            this.nextUrl !== '/license' &&
            !this.nextUrl.startsWith('/newalumno')
          ) {
            this.router.navigate(['/home']);
          }
        }
      },
      error => console.log('Error: ' + error)
    );
  }
  // OJO, AQUI EN JS SE DEVOLVERIA UN DEFERRED.PROMISE, MIRAR QUE NO DE ERROR
  authenticationPromise(id_tipousuario) {
    this.sessionServerCS.checkSession().subscribe(
      response => {
        this.variable2 = response;
        if ((this.variable2.status = 200)) {
          if (
            this.variable2.json.data.obj_tipousuario.data.id <= id_tipousuario
          ) {
            this.isSessionActiveTF = true;
            this.sessionInfo = this.variable2.json.data;
          } else {
            if (
              this.nextUrl !== '/' &&
              this.nextUrl !== '/home' &&
              this.nextUrl !== '/login' &&
              this.nextUrl !== '/license' &&
              !this.nextUrl.startsWith('/newalumno')
            ) {
              this.router.navigate(['/login']);
            }
          }
        } else {
          this.isSessionActiveTF = false;
          if (
            this.nextUrl !== '/' &&
            this.nextUrl !== '/home' &&
            this.nextUrl !== '/login' &&
            this.nextUrl !== '/license' &&
            !this.nextUrl.startsWith('/newalumno')
          ) {
            this.router.navigate(['/login']);
          }
        }
      },
      error => console.log('Error: ' + error)
    );
  }

  isSessionActive() {
    return this.isSessionActiveTF;
  }
  setSessionInactive() {
    this.isSessionActiveTF = false;
    this.sessionInfo = null;
  }
  setSessionActive() {
    this.isSessionActiveTF = true;
  }
  getSessionInfo() {
    return this.sessionInfo;
  }
  setSessionInfo(value) {
    this.sessionInfo = value;
  }
  setNextURL(value) {
    this.nextUrl = value;
  }
}
