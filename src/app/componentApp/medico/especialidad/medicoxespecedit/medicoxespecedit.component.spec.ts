import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoxespeceditComponent } from './medicoxespecedit.component';

describe('MedicoxespeceditComponent', () => {
  let component: MedicoxespeceditComponent;
  let fixture: ComponentFixture<MedicoxespeceditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoxespeceditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoxespeceditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
