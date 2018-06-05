import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpacienteComponent } from './xpaciente.component';

describe('XpacienteComponent', () => {
  let component: XpacienteComponent;
  let fixture: ComponentFixture<XpacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
