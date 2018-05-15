import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursoplist1Component } from './cursoplist1.component';

describe('Cursoplist1Component', () => {
  let component: Cursoplist1Component;
  let fixture: ComponentFixture<Cursoplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cursoplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cursoplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
