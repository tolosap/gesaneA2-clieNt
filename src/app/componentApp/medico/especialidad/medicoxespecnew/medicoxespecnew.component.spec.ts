import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoxespecnewComponent } from './medicoxespecnew.component';

describe('MedicoxespecnewComponent', () => {
  let component: MedicoxespecnewComponent;
  let fixture: ComponentFixture<MedicoxespecnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoxespecnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoxespecnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
