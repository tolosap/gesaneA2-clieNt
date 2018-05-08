import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-plistheader]',
  templateUrl: './plistheader.component.html',
  styleUrls: ['./plistheader.component.css']
})
export class PlistheaderComponent implements OnInit {

  @Input() url;
  @Input() numpage;
  @Input() rpp;
  @Input() filterparams;
  @Input() metap;
  @Input() pages;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doorder(orderField, ascDesc) {
    if (this.filterparams) {
      this.router.navigate([this.url + '/' + this.numpage + '/' +
      this.rpp + '?filter=' + this.filterparams + '?order=' + orderField + ',' + ascDesc ]);
    } else {
      this.router.navigate([this.url + '/' + this.numpage + '/' +
      this.rpp + '?order=' + orderField + ',' + ascDesc ]);
    }
  }

}
