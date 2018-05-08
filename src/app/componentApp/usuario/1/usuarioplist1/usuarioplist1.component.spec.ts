import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuarioplist1Component } from './usuarioplist1.component';

describe('Usuarioplist1Component', () => {
  let component: Usuarioplist1Component;
  let fixture: ComponentFixture<Usuarioplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usuarioplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usuarioplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
