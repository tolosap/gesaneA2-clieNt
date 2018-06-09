import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Destinoaltaedit1Component } from './destinoaltaedit1.component';

describe('Destinoaltaedit1Component', () => {
  let component: Destinoaltaedit1Component;
  let fixture: ComponentFixture<Destinoaltaedit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Destinoaltaedit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Destinoaltaedit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
