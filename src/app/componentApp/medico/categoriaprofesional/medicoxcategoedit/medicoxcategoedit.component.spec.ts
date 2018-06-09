import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoxcategoeditComponent } from './medicoxcategoedit.component';

describe('MedicoxcategoeditComponent', () => {
  let component: MedicoxcategoeditComponent;
  let fixture: ComponentFixture<MedicoxcategoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoxcategoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoxcategoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
