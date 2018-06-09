import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientexsexonewComponent } from './pacientexsexonew.component';

describe('PacientexsexonewComponent', () => {
  let component: PacientexsexonewComponent;
  let fixture: ComponentFixture<PacientexsexonewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientexsexonewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientexsexonewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
