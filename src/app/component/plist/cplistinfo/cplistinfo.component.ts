import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cplistinfo',
  templateUrl: './cplistinfo.component.html',
  styleUrls: ['./cplistinfo.component.css']
})
export class CplistinfoComponent implements OnInit {
  // todos < menos search =
  @Input() url;
  @Input() numpage;
  @Input() rpp;
  @Input() registers;
  @Input() orderparams;
  @Input() filterparams;
  @Input() searchtext: string;

  constructor(private router: Router) {}
  // constructor() {}

  ngOnInit() {}

  doresetorder() {
    if (this.filterparams) {
      this.router.navigate([this.url + '/' + this.numpage + '/' + this.rpp], {
        queryParams: { filter: this.filterparams }
      });
    } else {
      this.router.navigate([this.url + '/' + this.numpage + '/' + this.rpp]);
    }
    return false;
  }

  doresetfilter() {
    if (this.filterparams) {
      this.router.navigate([this.url + '/' + this.numpage + '/' + this.rpp], {
        queryParams: { order: this.orderparams }
      });
    } else {
      this.router.navigate([this.url + '/' + this.numpage + '/' + this.rpp]);
    }
    return false;
  }

  resetClientfilter() {
    this.searchtext = '';
    return false;
  }

}
