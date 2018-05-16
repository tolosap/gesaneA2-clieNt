import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Input() name;
  @Input() required;
  @Input() model;
  @Input() form;

  constructor() { }

  ngOnInit() {
  }

  change () {
    const strFecha = this.model;
    if (strFecha.length !== 10) {
      this.validity(false);
    } else {
      const arrFecha = strFecha.split('/');
      if (arrFecha[0].length !== 2 || arrFecha[1].length !== 2 || arrFecha[2].length !== 4) {
        this.validity(false);
      } else {
          const newDate = new Date(arrFecha[2], arrFecha[1] - 1, arrFecha[0]);
          if (newDate.getFullYear() === arrFecha[2] && newDate.getMonth() + 1 === arrFecha[1]
          && newDate.getDate() === arrFecha[0]) {
            this.validity(true);
          } else {
            this.validity(false);
          }
        }
     }
  }

  validity(bool) {
    if (this.form) {
      this.form[this.name].setValidity('valid', bool);
    }
  }


}
