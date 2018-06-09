import { Component, OnInit } from '@angular/core';
import { ConstantServiceService } from '../../../service/constant-service.service';
import { SessionServerCallService } from '../../../service/session-server-call.service';
import { ServiceConnService } from '../../../service/service-conn.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolService } from '../../../service/tool.service';

@Component({
  selector: 'app-centrosanitarioremove1',
  templateUrl: '../../../shared/aplicaciones/remove.html',
  styleUrls: ['./centrosanitarioremove1.component.css']
})
export class Centrosanitarioremove1Component implements OnInit {
  ob = 'centrosanitario';
  op = 'remove';
  profile = 1;
  // ---
  id: number;
  // ---
  url = this.ob + '/' + this.profile + '/' + this.op;
  // ---
  status = null;
  debugging = this.constantService.debugging();
  variable;
  variable2;
  isdataavailable = false;
  bean;
  metao;
  metap;

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
        this.metao = this.variable.json.metaObject;
        this.metap = this.variable.json.metaProperties;
        this.isdataavailable = true;
      } else {
        this.status = 'Error en la recepción de datos del servidor';
      }
    }, error => (this.status = 'Error en la recepción de datos del servidor'));
  }

  removeOne() {
    this.serverCallService.remove(this.ob, this.id).subscribe(response => {
      this.variable2 = response;
      if (this.variable2.status === 200) {
        if (this.variable2.json === 1) {
          this.status = 'El registro con id=' + this.id + ' se ha eliminado.';
        } else {
          this.status = 'Error en el borrado de datos del servidor';
        }
      } else {
        this.status = 'Error en la recepción de datos del servidor';
      }
    }, error => (this.status = 'Error en la recepción de datos del servidor'));
  }

  back() {
    // this.location.back();
    window.history.back();
  }

  close() {
    this.router.navigate(['/home']);
  }

}
