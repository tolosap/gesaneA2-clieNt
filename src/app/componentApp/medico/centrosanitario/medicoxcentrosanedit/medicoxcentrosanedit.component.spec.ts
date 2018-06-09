import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoxcentrosaneditComponent } from './medicoxcentrosanedit.component';

describe('MedicoxcentrosaneditComponent', () => {
  let component: MedicoxcentrosaneditComponent;
  let fixture: ComponentFixture<MedicoxcentrosaneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoxcentrosaneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoxcentrosaneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
