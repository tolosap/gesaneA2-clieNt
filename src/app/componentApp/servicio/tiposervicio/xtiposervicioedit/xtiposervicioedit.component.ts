import { Component, OnInit } from '@angular/core';
import { ServiceConnService } from '../../../../service/service-conn.service';
import { ConstantServiceService } from '../../../../service/constant-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolService } from '../../../../service/tool.service';
import { SessionService } from '../../../../service/session.service';
@Component({
  selector: 'app-xtiposervicioedit',
  templateUrl: '../../../../shared/aplicaciones/newedit.html',
  styleUrls: ['./xtiposervicioedit.component.css']
})
export class ServicioxtiposervicioeditComponent implements OnInit {
  ob = 'servicio';
  op = 'editx';
  profile = this.sessionService.getSessionProfile();

  id: number;

  xob = 'tiposervicio';
  xid;

  status = null;
  debugging = this.constantService.debugging();
  // debugging = 2;
  url = this.ob + '/' + this.profile + '/' + this.op;

  variable;
  variable2;
  metao;
  metap;
  bean = {};
  isdataavailable = false;
  linkedbean;

  // Datetimepicker data
  date: Date = new Date();
  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'dd-MM-yyyy HH:mm',
      defaultOpen: false,
      closeOnSelect: true
  };

  constructor(
    private serverCallService: ServiceConnService,
    private constantService: ConstantServiceService,
    private router: Router,
    private toolService: ToolService,
    private actRoute: ActivatedRoute,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      // console.log(params['rpp']);
      this.id = params['id'];
      this.xid = params['xid'];
    });
    if (this.xob && this.xid) {
      this.linkedbean = null;
      this.serverCallService.getOne(this.xob, this.xid).subscribe(function (response) {
        this.variable3 = response;
          if (this.variable3.status === 200) {
            this.linkedbean = this.variable3.json;
            this.getOne();
          }
      }, error => (this.status = 'Error en la recepción de datos del servidor'));
    }  }

  getOne() {

    this.serverCallService.getOne(this.ob, this.id).subscribe(response => {
      this.variable = response;
      if (this.variable.status === 200) {
        this.status = null;
        this.bean = this.variable.json.data;
        console.log(this.bean['id']);
        this.metao = this.variable.json.metaObject;
        this.metap = this.variable.json.metaProperties;
        this.isdataavailable = true;
      } else {
        this.status = 'Error en la recepción de datos del servidor';
      }
    }, error => (this.status = 'Error en la recepción de datos del servidor'));
  }

  save() {

    this.bean = this.toolService.booleanTo1or0(this.bean);

    const jsonToSend = {
      json: JSON.stringify(this.toolService.array_identificarArray(this.bean))
    };
    this.serverCallService.set(this.ob, jsonToSend).subscribe(response => {
      this.variable2 = response;
      if (this.variable2.status === 200) {
        this.status = 'El registro con id= ' + this.bean['id'] + ' se ha modificado.';
      } else {
        this.status = 'Error en la recepción de datos del servidor';
      }
    }, error => (this.status = 'Error en la recepcion de datos del servidor'));
  }

  back() {
    // this.location.back();
    window.history.back();
  }

  close() {
    this.router.navigate(['/home']);
  }
}
