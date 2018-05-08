import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cplistrpp',
  templateUrl: './cplistrpp.component.html',
  styleUrls: ['./cplistrpp.component.css']
})
export class CplistrppComponent implements OnInit {

  @Input() url;
  @Input() numpage;
  @Input() rpp;
  @Input() orderparams;
  @Input() filterparams;
  @Input() sfilterparams;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  repaginate(rpp) {
    if (this.filterparams) {
      if (this.orderparams) {
        this.router.navigate([this.url + '/' + this.numpage + '/' +
         rpp + '?filter=' + this.filterparams + '?order=' + this.orderparams]);
      } else {
        this.router.navigate([this.url + '/' + this.numpage + '/' +
        rpp + '?filter=' + this.filterparams]);
      }
    } else {
      if (this.orderparams) {
        this.router.navigate([this.url + '/' + this.numpage + '/' +
         rpp + '?order=' + this.orderparams]);
      } else {
        this.router.navigate([this.url + '/' + this.numpage + '/' + rpp]);
      }
    }
    return false;
  }

}
