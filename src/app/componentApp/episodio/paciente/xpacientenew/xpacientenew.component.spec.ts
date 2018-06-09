import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpacientenewComponent } from './xpacientenew.component';

describe('XpacientenewComponent', () => {
  let component: XpacientenewComponent;
  let fixture: ComponentFixture<XpacientenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpacientenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpacientenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
