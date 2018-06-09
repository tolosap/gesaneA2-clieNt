import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoxcategonewComponent } from './medicoxcategonew.component';

describe('MedicoxcategonewComponent', () => {
  let component: MedicoxcategonewComponent;
  let fixture: ComponentFixture<MedicoxcategonewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoxcategonewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoxcategonewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
