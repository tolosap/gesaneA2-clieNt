import { Component, OnInit } from '@angular/core';
import { ServiceConnService } from '../../../service/service-conn.service';
import { ConstantServiceService } from '../../../service/constant-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolService } from '../../../service/tool.service';
import { SessionService } from '../../../service/session.service';
@Component({
  selector: 'app-sexonew1',
  templateUrl: '../../../shared/aplicaciones/newedit.html',
  styleUrls: ['./sexonew1.component.css']
})
export class Sexonew1Component implements OnInit {
  ob = 'sexo';
  op = 'new';
  profile = this.sessionService.getSessionProfile();

  status = null;
  debugging = this.constantService.debugging();
  url = this.ob + '/' + this.profile + '/' + this.op;

  variable;
  variable2;
  metao;
  metap;
  bean = [{}];

  constructor(
    private serverCallService: ServiceConnService,
    private constantService: ConstantServiceService,
    private router: Router,
    private toolService: ToolService,
    private actRoute: ActivatedRoute,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.getMeta();
  }

  getMeta() {
    this.serverCallService.getMeta(this.ob).subscribe(response => {
      this.variable = response;
      console.log(this.variable);
      if (this.variable.status === 200) {
        this.status = null;
        // --For every foreign key create obj inside bean tobe filled...
        this.variable.json.metaProperties.forEach(function(property) {
          if (property.Type === 'ForeignObject') {
            console.log(property.Name);
            this.bean.property.Name = [{}];
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
