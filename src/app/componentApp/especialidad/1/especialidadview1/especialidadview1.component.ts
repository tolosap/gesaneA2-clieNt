import { Component, OnInit } from '@angular/core';
import { ServiceConnService } from '../../../../service/service-conn.service';
import { ConstantServiceService } from '../../../../service/constant-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolService } from '../../../../service/tool.service';
@Component({
  selector: 'app-especialidadview1',
  templateUrl: '../../../../shared/aplicaciones/view.html',
  styleUrls: ['./especialidadview1.component.css']
})
export class Especialidadview1Component implements OnInit {
  ob = 'especialidad';
  op = 'view';
  profile = 1;
  // ---
  id: number;
  onlyview = false;
  // ---
  url = this.ob + '/' + this.profile + '/' + this.op;
  // ---
  status = null;
  debugging = this.constantService.debugging();
  variable;
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
          console.log(this.bean['id']);
          this.metao = this.variable.json.metaObject;
          this.metap = this.variable.json.metaProperties;
          this.isdataavailable = true;
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
