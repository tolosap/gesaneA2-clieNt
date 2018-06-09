import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoxcategoplistComponent } from './medicoxcategoplist.component';

describe('MedicoxcategoplistComponent', () => {
  let component: MedicoxcategoplistComponent;
  let fixture: ComponentFixture<MedicoxcategoplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoxcategoplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoxcategoplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
