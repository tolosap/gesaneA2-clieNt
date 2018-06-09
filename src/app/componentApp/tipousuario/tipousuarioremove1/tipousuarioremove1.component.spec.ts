import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipousuarioremove1Component } from './tipousuarioremove1.component';

describe('Tipousuarioremove1Component', () => {
  let component: Tipousuarioremove1Component;
  let fixture: ComponentFixture<Tipousuarioremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipousuarioremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipousuarioremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
