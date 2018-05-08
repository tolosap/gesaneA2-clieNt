import { Component, OnInit, Input } from '@angular/core';
import { ToolService } from '../../../../service/tool.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cplistpagination',
  templateUrl: './cplistpagination.component.html',
  styleUrls: ['./cplistpagination.component.css']
})
export class CplistpaginationComponent implements OnInit {

  @Input() url;
  @Input() numpage;
  @Input() rpp;
  @Input() pages;
  @Input() neighbourhood;
  @Input() filterparams;
  @Input() orderparams;
  @Input() sfilterparams;

  getRangeArray = this.toolService.getRangeArray;
  evaluateMin = this.toolService.evaluateMin;
  evaluateMax = this.toolService.evaluateMax;

  constructor(private toolService: ToolService, private router: Router) { }

  ngOnInit() {
  }

  gotopage(numpage, event) {
    this.numpage = numpage;
    if ( this.filterparams ) {
      if ( this.orderparams ) {
        this.router.navigate([this.url + '/' + this.numpage + '/' + this.rpp + '?filter='
         + this.filterparams + '&order=' + this.orderparams]);
      } else {
        this.router.navigate([this.url + '/' + this.numpage + '/' + this.rpp + '?filter='
        + this.filterparams]);
      }
    } else {
      if ( this.orderparams ) {
        this.router.navigate([this.url + '/' + this.numpage + '/' + this.rpp + '&order=' + this.orderparams]);
      } else {
        this.router.navigate([this.url + '/' + this.numpage + '/' + this.rpp]);
      }
    }
    return false;
  }

}
