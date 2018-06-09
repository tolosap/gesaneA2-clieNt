import { Component, OnInit } from '@angular/core';
import { NgOption } from '@ng-select/ng-select';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-foreignkey',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './foreignkey.component.html'
})
export class ForeignkeyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
