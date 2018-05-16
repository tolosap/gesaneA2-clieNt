import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ConstantServiceService } from '../../../../service/constant-service.service';
import { SessionServerCallService } from '../../../../service/session-server-call.service';
import { ServiceConnService } from '../../../../service/service-conn.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolService } from '../../../../service/tool.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-categoriaprofesionalplist1',
  templateUrl: '../../../../shared/aplicaciones/plist.html',
  styleUrls: ['./categoriaprofesionalplist1.component.css']
})
export class Categoriaprofesionalplist1Component implements OnInit {
  ob = 'categoriaprofesional';
  op = 'plist';
  profile = 1;
  // ----
  // ---
  url = this.ob + '/' + this.profile + '/' + this.op;
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
  // ---
  id: number;
  metao;
  metap;
  interm;
  interm2;
  sub;
  showRemove;
  isdataavailable = false;
  constructor(
    private serverCallService: ServiceConnService,
    private constantService: ConstantServiceService,
    private location: Location,
    private router: Router,
    private toolService: ToolService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // ESTO SERIA COMO $ROUTERPARAMS EN AJS
    this.actRoute.params.subscribe(params => {
      // console.log(params['rpp']);
      // this.id = params['id'];
      this.numpage = this.toolService.checkDefault(1, params['page']);
      this.rpp = this.toolService.checkDefault(10, params['rpp']);
       this.orderParams = this.toolService.checkEmptyString(params['order']);
       this.filterParams = this.toolService.checkEmptyString(params['filter']);
      // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.getDataFromServer();
      this.setShowRemove(true);
    });
  }

  getDataFromServer() {
    this.serverCallService.getCount(this.ob, this.filterParams).switchMap( response => {
      this.interm = response;
      console.log(this.interm.status);
      if (this.interm.status === 200) {
        this.registers = this.interm.json;
        this.pages = this.toolService.calculatePages(this.rpp, this.registers);
        if (this.numpage > this.pages) {
          this.numpage = this.pages;
        }
        return this.serverCallService.getPage(
          this.ob,
          this.rpp,
          this.numpage,
          this.filterParams,
          this.orderParams
        );
      } else {
        this.status = 'Error en la recepción de datos del servidor';
      }
    })
    .subscribe( response2 => {
      this.interm2 = response2;
      console.log(this.interm2);
      if (this.interm2.status === 200) {
        this.pages2 = this.interm2.json.data;
        this.metao = this.interm2.json.metaObject;
        console.log(this.interm2.json.metaObject);
        this.metap = this.interm2.json.metaProperties;
        console.log('metap: ' + this.metap);
        this.isdataavailable = true;
      } else {
        this.status = 'Error en la recepción de datos del servidor';
      }
    });
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
