import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session.service';
import { SessionServerCallService } from '../../service/session-server-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  title = 'Bye';
  icon = 'fa-sign-out';
  session_info = this.sessionService.getSessionInfo();
  isSessionActive = this.sessionService.isSessionActive();
  interm;
  status;

  constructor(private sessionService: SessionService,
     private sessionServerCallService: SessionServerCallService,
    private router: Router) { }

  ngOnInit() {
    this.sessionServerCallService.logout().subscribe( response => {
      this.interm = response;
          if (this.interm.status === 200) {
              this.sessionService.setSessionInactive();
              this.session_info = this.sessionService.getSessionInfo();
              this.isSessionActive = this.sessionService.isSessionActive();
              this.status = 'Has salido del sistema';
              this.router.navigate(['home']);
              // $location.path('home');
          } else {
              status = 'Error en la recepción de datos del servidor';
          }
  }, error => this.status = 'Error en la recepción de datos del servidor');
  }


}
