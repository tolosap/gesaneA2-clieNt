import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipousuarioplist1Component } from './tipousuarioplist1.component';

describe('Tipousuarioplist1Component', () => {
  let component: Tipousuarioplist1Component;
  let fixture: ComponentFixture<Tipousuarioplist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipousuarioplist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipousuarioplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
