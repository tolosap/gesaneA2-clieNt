import { Injectable } from '@angular/core';
import { ConstantServiceService } from './constant-service.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BrowserXhr } from '@angular/http/src/backends/browser_xhr';
import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class ServiceConnService {
  constructor(
    private connection: HttpClient,
    private constantService: ConstantServiceService
  ) {}

  doSomething(strObject, filter) {
      return this.connection.get(this.constantService.getAppUrl() +
      '?ob=' +
      strObject +
      '&op=getcount&filter=' +
      filter, { withCredentials: true }).map((response: Response) => response.json());
  }

  getCount(strObject, filter) {
    if (filter) {
      return this.connection.get(
        this.constantService.getAppUrl() +
          '?ob=' +
          strObject +
          '&op=getcount&filter=' +
          filter,
        { withCredentials: true }
      );
    } else {
      return this.connection.get(
        this.constantService.getAppUrl() + '?ob=' + strObject + '&op=getcount',
        { withCredentials: true }
      );
    }
  }

  getPage(strObject, rpp, page, filter, order) {
    if (filter) {
      if (order) {
        return this.connection.get(
          this.constantService.getAppUrl() +
            '?ob=' +
            strObject +
            '&op=getpage&np=' +
            page +
            '&rpp=' +
            rpp +
            '&filter=' +
            filter +
            '&order=' +
            order,
          { withCredentials: true }
        );
      } else {
        return this.connection.get(
          this.constantService.getAppUrl() +
            '?ob=' +
            strObject +
            '&op=getpage&np=' +
            page +
            '&rpp=' +
            rpp +
            '&filter=' +
            filter,
          { withCredentials: true }
        );
      }
    } else {
      if (order) {
        return this.connection.get(
          this.constantService.getAppUrl() +
            '?ob=' +
            strObject +
            '&op=getpage&np=' +
            page +
            '&rpp=' +
            rpp +
            '&order=' +
            order,
          { withCredentials: true }
        );
      } else {
        return this.connection.get(
          this.constantService.getAppUrl() +
            '?ob=' +
            strObject +
            '&op=getpage&np=' +
            page +
            '&rpp=' +
            rpp,
          { withCredentials: true }
        );
      }
    }
  }

  getOne(strClass, id) {
    return this.connection.get(
      this.constantService.getAppUrl() + '?ob=' + strClass + '&op=get&id=' + id,
      { withCredentials: true }
    );
  }

  remove(strClass, id) {
    return this.connection.get(
      this.constantService.getAppUrl() +
        '?ob=' +
        strClass +
        '&op=remove&id=' +
        id,
      { withCredentials: true }
    );
  }

  set(strClass, jsonfile) {
    // this.connection.headers.put['Content-Type'] ='application/json;charset=utf-8';
    return this.connection.get(
      this.constantService.getAppUrl() + '?ob=' + strClass + '&op=set',
      {
        params: jsonfile,
        withCredentials: true
      }
    );
  }

  getAll(strObject, filter?, order?) {
    if (filter) {
      if (order) {
        return this.connection.get(
          this.constantService.getAppUrl() +
            '?ob=' +
            strObject +
            '&op=getpage&page=1&rpp=1000&filter=' +
            filter +
            '&order=' +
            order,
          { withCredentials: true }
        );
      } else {
        return this.connection.get(
          this.constantService.getAppUrl() +
            '?ob=' +
            strObject +
            '&op=getpage&page=1&rpp=1000&filter=' +
            filter,
          { withCredentials: true }
        );
      }
    } else {
      if (order) {
        return this.connection.get(
          this.constantService.getAppUrl() +
            '?ob=' +
            strObject +
            '&op=getpage&page=1&rpp=1000&order=' +
            order,
          { withCredentials: true }
        );
      } else {
        return this.connection.get(
          this.constantService.getAppUrl() +
            '?ob=' +
            strObject +
            '&op=getpage&page=1&rpp=1000',
          { withCredentials: true }
        );
      }
    }
  }

  getPageX(strObject, strObjectForeign, idForeign, rpp, page, filter, order) {
    const base =
      this.constantService.getAppUrl() +
      '?ob=' +
      strObject +
      '&ob_foreign=' +
      strObjectForeign +
      '&id_foreign=' +
      idForeign +
      '&op=getpagex';
    if (filter) {
      if (order) {
        return this.connection.get(
          base +
            '&np=' +
            page +
            '&rpp=' +
            rpp +
            '&filter=' +
            filter +
            '&order=' +
            order,
          { withCredentials: true }
        );
      } else {
        return this.connection.get(
          base + '&np=' + page + '&rpp=' + rpp + '&filter=' + filter,
          { withCredentials: true }
        );
      }
    } else {
      if (order) {
        return this.connection.get(
          base + '&np=' + page + '&rpp=' + rpp + '&order=' + order,
          { withCredentials: true }
        );
      } else {
        return this.connection.get(base + '&np=' + page + '&rpp=' + rpp, {
          withCredentials: true
        });
      }
    }
  }

  getCountX(strObject, strObjectForeign, idForeign, filter) {
    const base =
      this.constantService.getAppUrl() +
      '?ob=' +
      strObject +
      '&ob_foreign=' +
      strObjectForeign +
      '&id_foreign=' +
      idForeign +
      '&op=getcountx';
    if (filter) {
      return this.connection.get(base + '&filter=' + filter, {
        withCredentials: true
      });
    } else {
      return this.connection.get(base, { withCredentials: true });
    }
  }

  getAllObjectsMetaData() {
    return this.connection.get(
      this.constantService.getAppUrl() + '?ob=usuario&op=getallobjectsmetadata',
      { withCredentials: true }
    );
  }

  getMeta(strClass) {
    return this.connection.get(
      this.constantService.getAppUrl() + '?ob=' + strClass + '&op=getmetadata',
      { withCredentials: true }
    );
  }

  getSession(strClass) {
    return this.connection.get(
      this.constantService.getAppUrl() +
        '?ob=' +
        strClass +
        '&op=getsessionstatus',
      { withCredentials: true }
    );
  }
}
