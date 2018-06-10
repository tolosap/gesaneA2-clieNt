import { Component, OnInit, getModuleFactory } from '@angular/core';
import { ServiceConnService } from '../../../../service/service-conn.service';
import { ConstantServiceService } from '../../../../service/constant-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolService } from '../../../../service/tool.service';
import { SessionService } from '../../../../service/session.service';
@Component({
  selector: 'app-pacientextipopagonew',
  templateUrl: '../../../../shared/aplicaciones/newedit.html',
  styleUrls: ['./pacientextipopagonew.component.css']
})
export class PacientextipopagonewComponent implements OnInit {
  ob = 'paciente';
  op = 'newx';
  profile = this.sessionService.getSessionProfile();

  xob = 'tipopago';
  xid;

  status = null;
  debugging = this.constantService.debugging();
  url = this.ob + '/' + this.profile + '/' + this.op;

  variable3;
  variable;
  variable2;


  metao;
  metap;
  bean = [{}];
  public linkedbean = null;

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
      this.xid = params['id'];
    });
    this.getMeta();
  }

  getMeta() {
    if (this.xob && this.xid) {
      this.linkedbean = null;
      this.serverCallService.getOne(this.xob, this.xid).subscribe(response => {
        this.variable3 = response;
        if (this.variable3.status === 200) {
          this.linkedbean = this.variable3.json;
        }
      }, error => (this.status = 'Error en la recepción de datos del servidor'));
    }


    this.serverCallService.getMeta(this.ob).subscribe(response => {
      this.variable = response;
      console.log(this.variable);
      if (this.variable.status === 200) {
        this.status = null;
        // --For every foreign key create obj inside bean tobe filled...
        this.variable.json.metaProperties.forEach(function(property) {
          if (property.Type === 'ForeignObject') {
            console.log(property.Name);
            // this.bean.property.Name = [{}];
            // this.bean[property.Name].data = [{}];
            // this.bean[property.Name].data.id = 0;
          }
        });
        // --
        this.metao = this.variable.json.metaObject;
        this.metap = this.variable.json.metaProperties;
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
        this.status =
          'El registro se ha creado con id=' + this.variable2.json;
        this.bean['id'] = this.variable2.json;
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
