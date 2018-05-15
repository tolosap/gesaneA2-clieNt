import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Centroplist1Component } from './centroplist1.component';

describe('Centroplist1Component', () => {
  let component: Centroplist1Component;
  let fixture: ComponentFixture<Centroplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centroplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centroplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
