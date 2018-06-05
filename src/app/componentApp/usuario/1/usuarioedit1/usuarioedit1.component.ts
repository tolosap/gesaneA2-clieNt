import { Component, OnInit } from '@angular/core';
import { ServiceConnService } from '../../../../service/service-conn.service';
import { ConstantServiceService } from '../../../../service/constant-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolService } from '../../../../service/tool.service';

@Component({
  selector: 'app-usuarioedit1',
  templateUrl: '../../../../shared/aplicaciones/newedit.html',
  // templateUrl: '../../../../shared/pruebas.html',
  styleUrls: ['./usuarioedit1.component.css']
})
export class Usuarioedit1Component implements OnInit {
  ob = 'usuario';
  op = 'edit';
  profile = 1;

  id: number;

  status = null;
  // debugging = this.constantService.debugging();
  debugging = 2;
  url = this.ob + '/' + this.profile + '/' + this.op;

  variable;
  variable2;
  metao;
  metap;
  bean = {};
  isdataavailable = false;

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
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      // console.log(params['rpp']);
      this.id = params['id'];
      this.getOne();
    });
  }

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

    if (this.bean['activo'] === false) {
       // tslint:disable-next-line:no-unused-expression
       this.bean['activo'] = '0';
    }
    if (this.bean['activo'] === true) {
       // tslint:disable-next-line:no-unused-expression
      this.bean['activo'] = '1';
    }
    if (this.bean['validado'] === false) {
      // tslint:disable-next-line:no-unused-expression
      this.bean['validado'] = '0';
    }
    if (this.bean['validado'] === true) {
      // tslint:disable-next-line:no-unused-expression
      this.bean['validado'] = '1';
    }

    const jsonToSend = {
      json: JSON.stringify(this.toolService.array_identificarArray(this.bean))
    };
    this.serverCallService.set(this.ob, jsonToSend).subscribe(response => {
      this.variable2 = response;
      if (this.variable2.status === 200) {
        this.status = 'El registro con id= ' + this.bean['id'] + ' se ha modificado.';
        // this.status =
        //   'El registro se ha creado con id=' + this.variable2.json;
        // this.bean['id'] = this.variable2.json;                        Esto es para el new
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
