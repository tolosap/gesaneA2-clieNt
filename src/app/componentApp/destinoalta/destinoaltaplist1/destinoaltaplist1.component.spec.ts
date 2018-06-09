import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Destinoaltaplist1Component } from './destinoaltaplist1.component';

describe('Destinoaltaplist1Component', () => {
  let component: Destinoaltaplist1Component;
  let fixture: ComponentFixture<Destinoaltaplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Destinoaltaplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Destinoaltaplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
