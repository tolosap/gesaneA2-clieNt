import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { SessionService } from '../../service/session.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor(private location: Location, private sessionService: SessionService) { }

  session_info;
  isSessionActive;

  ngOnInit() {
    this.isActive();
    this.session_info = this.sessionService.getSessionInfo();
    console.log(this.session_info);
    console.log( this.sessionService.getSessionInfo());
    this.isSessionActive = this.sessionService.isSessionActive();
  }

  isActive(viewLocation?) {
    // console.log(viewLocation);
    return location.pathname.startsWith(viewLocation);
  }

}
