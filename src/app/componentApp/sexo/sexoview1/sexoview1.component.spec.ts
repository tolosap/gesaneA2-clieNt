import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sexoview1Component } from './sexoview1.component';

describe('Sexoview1Component', () => {
  let component: Sexoview1Component;
  let fixture: ComponentFixture<Sexoview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sexoview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sexoview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
