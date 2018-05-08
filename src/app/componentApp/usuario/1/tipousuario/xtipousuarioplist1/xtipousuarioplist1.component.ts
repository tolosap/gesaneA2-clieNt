import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ConstantServiceService } from '../../../../../service/constant-service.service';
import { SessionServerCallService } from '../../../../../service/session-server-call.service';
import { ServiceConnService } from '../../../../../service/service-conn.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolService } from '../../../../../service/tool.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-xtipousuarioplist1',
  templateUrl: '../../../../../shared/aplicaciones/plist.html',
  styleUrls: ['./xtipousuarioplist1.component.css']
})
export class Xtipousuarioplist1Component implements OnInit {
  ob = 'usuario';
  op = 'plistx';
  profile = 1;
  // ----
  xob = 'tipousuario';
  xid: number;
  // ----
  url = this.ob +
    '/' +
    this.profile +
    '/' +
    this.op +
    this.xob +
    '/' +
    this.xid;
  // ----
  numpage;
  rpp;
  neighbourhood = this.constantService.getGlobalNeighbourhood();
  registers;
  pages;
  pages2;
  // ---
  orderParams;
  filterParams;
  // ---
  status = null;
  debugging = this.constantService.debugging();
  metao;
  metap;
  interm;
  interm2;
  interm3;
  sub;
  showRemove;
  isdataavailable = false;
  linkedbean;
  constructor(
    private serverCallService: ServiceConnService,
    private constantService: ConstantServiceService,
    private location: Location,
    private router: Router,
    private toolService: ToolService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      // console.log(params['rpp']);
      this.xid = params['id'];
      this.numpage = this.toolService.checkDefault(1, params['page']);
      this.rpp = this.toolService.checkDefault(10, params['rpp']);
      this.orderParams = this.toolService.checkEmptyString(params['order']);
      this.filterParams = this.toolService.checkEmptyString(params['filter']);
      // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
    this.getDataFromServer();
    this.setShowRemove(true);
  }

  getDataFromServer() {
    if (this.xob && this.xid) {
      this.linkedbean = null;
      this.serverCallService.getOne(this.xob, this.xid).subscribe(response => {
        this.interm = response;
        if (this.interm.status === 200) {
          this.linkedbean = this.interm.json;
        }
      }, error => (this.status = 'Error en la recepción de datos del servidor'));
    }

    this.serverCallService
      .getCountX(this.ob, this.xob, this.xid, this.filterParams)
      .switchMap(response => {
        this.interm2 = response;
        if (this.interm2.status === 200) {
          this.registers = this.interm2.json;
          this.pages = this.toolService.calculatePages(
            this.rpp,
            this.registers
          );
          if (this.numpage > this.pages) {
            this.numpage = this.pages;
          }
          return this.serverCallService.getPageX(
            this.ob,
            this.xob,
            this.xid,
            this.rpp,
            this.numpage,
            this.filterParams,
            this.orderParams
          );
        } else {
          this.status = 'Error en la recepción de datos del servidor';
        }
      })
      .subscribe(response => {
        this.interm3 = response;
        if (this.interm3.status === 200) {
          this.pages2 = this.interm3.json.data;
          this.metao = this.interm3.json.metaObject;
          this.metap = this.interm3.json.metaProperties;
        } else {
          this.status = 'Error en la recepción de datos del servidor';
        }
      }, error => (this.status = 'Error en la recepción de datos del servidor'));
  }

  doorder(orderField, ascDesc) {
    this.router.navigate([
      this.url + '/' + this.numpage + '/' + this.rpp,
      { filter: this.filterParams, order: orderField + ',' + ascDesc }
    ]);
  }


  back() {
    // this.location.back();
    window.history.back();
  }

  close() {
    this.router.navigate(['/app-home']);
  }

  setShowRemove(show) {
    this.showRemove = show;
  }
}
