import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipousuarioview1Component } from './tipousuarioview1.component';

describe('Tipousuarioview1Component', () => {
  let component: Tipousuarioview1Component;
  let fixture: ComponentFixture<Tipousuarioview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipousuarioview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipousuarioview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
