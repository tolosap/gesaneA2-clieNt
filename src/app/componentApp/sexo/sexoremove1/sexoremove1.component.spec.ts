import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sexoremove1Component } from './sexoremove1.component';

describe('Sexoremove1Component', () => {
  let component: Sexoremove1Component;
  let fixture: ComponentFixture<Sexoremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sexoremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sexoremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
