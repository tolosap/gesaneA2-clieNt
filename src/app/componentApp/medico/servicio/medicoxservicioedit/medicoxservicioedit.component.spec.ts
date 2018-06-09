import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoxservicioeditComponent } from './medicoxservicioedit.component';

describe('MedicoxservicioeditComponent', () => {
  let component: MedicoxservicioeditComponent;
  let fixture: ComponentFixture<MedicoxservicioeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoxservicioeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoxservicioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
