import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { SessionService } from '../../service/session.service';
import { ServiceConnService } from '../../service/service-conn.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor(private location: Location, private sessionService: SessionService, private serverCallService: ServiceConnService) { }

  session_info;
  isSessionActive;
  sessmetaObj;
  sessmetaProp;
  interm;
  meta;
  status;

  ngOnInit() {
    this.isActive();
    this.session_info = this.sessionService.getSessionInfo();
    // console.log('-----Menu info-----');
    // console.log(this.session_info);
    this.sessmetaObj = this.sessionService.getSessionMetadataObj();
    this.sessmetaProp = this.sessionService.getSessionMetadataProp();
    this.isSessionActive = this.sessionService.isSessionActive();
    if (this.isSessionActive) {
      this.getAllObjMetaData();
    }
    // console.log(this.sessmetaObj);
    // console.log(this.sessmetaProp);
    // console.log('Is Sess active: ' + this.sessionService.isSessionActive());
    // console.log('/////Menu info//////');
  }
  isActive(viewLocation?) {
    // console.log(viewLocation);
    return location.pathname.startsWith(viewLocation);
  }
  getAllObjMetaData() {
    this.serverCallService.getAllObjectsMetaData().subscribe( response => {
      this.interm = response;
      if (this.interm.status === 200) {
            this.status = null;
            this.meta = this.interm.json;
            // console.log(this.meta.usuario);
      } else {
        this.status = 'Error en la recepción de datos del servidor';
      }
    },
    error => console.log('Error: ' + error)
    );
  }
}
