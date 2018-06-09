import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Centroremove1Component } from './centroremove1.component';

describe('Centroremove1Component', () => {
  let component: Centroremove1Component;
  let fixture: ComponentFixture<Centroremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centroremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centroremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
