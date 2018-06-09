import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientexsexoeditComponent } from './pacientexsexoedit.component';

describe('PacientexsexoeditComponent', () => {
  let component: PacientexsexoeditComponent;
  let fixture: ComponentFixture<PacientexsexoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientexsexoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientexsexoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
