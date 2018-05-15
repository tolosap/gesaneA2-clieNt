import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session.service';
import { ConstantServiceService } from '../../service/constant-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionServerCallService } from '../../service/session-server-call.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // templateUrl: '../../shared/pruebas.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // debugging; ACORDARSE DE ACTIVAR ASI
  // debugging = true;
  title = 'Formulario de entrada al sistema';
  icon = 'fa-file-text-o';
  user = { username: '', password: '' };
  session_info = this.sessionService.getSessionInfo();
  isSessionActive = this.sessionService.isSessionActive();
  debugging = this.constantService.debugging();
  checkGrupoStatusMsg = '';
  variable;
  interm;
  intem2;

  constructor(
    private sessionService: SessionService,
    private constantService: ConstantServiceService,
    private connection: HttpClient,
    private routes: Router,
    private sessionServerCallService: SessionServerCallService
  ) {}

  ngOnInit() {}

  fill(nombre) {
    if (this.constantService.debugging()) {
      this.user['username'] = nombre;
      this.user['password'] = nombre;
    }
  }

  fillRegistro(cod) {
    if (this.constantService.debugging()) {
      this.user['key'] = cod;
    }
  }

  checkGrupo() {
    if (this.user['key']) {
      this.connection
        .get(
          this.constantService.getAppUrl() +
            '?ob=grupo&op=check&codigo=' +
            this.user['key'],
          { withCredentials: true }
        )
        .subscribe(
          response => {
            this.variable = response;
            if (this.variable.status === 200) {
              if (this.variable.json === 'OK') {
                this.routes.navigate(['/newalumno/9/' + this.user['key']]);
              }
            } else {
              this.checkGrupoStatusMsg = 'Error: el grupo no es correcto.';
              return false;
            }
          },
          error => this.errorCallback()
        );
    }
  }

  login() {
    this.sessionServerCallService
      .login(this.user.username, this.user.password)
      .subscribe(response => {
        console.log(response);
        this.interm = response;
        if (this.interm.status === 200) {
          this.sessionService.setSessionActive();
          console.log(this.interm.json);
          this.sessionService.setSessionMetadataProp(this.interm.json.metaProperties);
          this.sessionService.setSessionMetadataObj(this.interm.json.metaObject);
          this.sessionService.setSessionInfo(this.interm.json.data);
          this.session_info = this.sessionService.getSessionInfo();
          this.isSessionActive = this.sessionService.isSessionActive();
          this.routes.navigate(['/home']);
        } else {
          this.sessionService.setSessionInactive();
          this.session_info = this.sessionService.getSessionInfo();
          this.isSessionActive = this.sessionService.isSessionActive();
          return false;
        }
      }, error => this.errorCallback());
  }

  errorCallback() {
    this.sessionService.setSessionInactive();
    this.session_info = this.sessionService.getSessionInfo();
    this.isSessionActive = this.sessionService.isSessionActive();
    return false;
  }
}
