import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoxservicioplistComponent } from './medicoxservicioplist.component';

describe('MedicoxservicioplistComponent', () => {
  let component: MedicoxservicioplistComponent;
  let fixture: ComponentFixture<MedicoxservicioplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoxservicioplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoxservicioplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
