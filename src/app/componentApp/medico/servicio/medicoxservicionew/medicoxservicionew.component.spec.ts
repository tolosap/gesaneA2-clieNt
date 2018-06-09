import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoxservicionewComponent } from './medicoxservicionew.component';

describe('MedicoxservicionewComponent', () => {
  let component: MedicoxservicionewComponent;
  let fixture: ComponentFixture<MedicoxservicionewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoxservicionewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoxservicionewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
