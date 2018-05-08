import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cplistvisiblefields',
  templateUrl: './cplistvisiblefields.component.html',
  styleUrls: ['./cplistvisiblefields.component.css']
})
export class CplistvisiblefieldsComponent implements OnInit {

  @Input() fields;

  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return index;
  }

}
