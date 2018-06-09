import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoxcentrosannewComponent } from './medicoxcentrosannew.component';

describe('MedicoxcentrosannewComponent', () => {
  let component: MedicoxcentrosannewComponent;
  let fixture: ComponentFixture<MedicoxcentrosannewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoxcentrosannewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoxcentrosannewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
