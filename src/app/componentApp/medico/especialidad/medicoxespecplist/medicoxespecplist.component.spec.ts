import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoxespecplistComponent } from './medicoxespecplist.component';

describe('MedicoxespecplistComponent', () => {
  let component: MedicoxespecplistComponent;
  let fixture: ComponentFixture<MedicoxespecplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoxespecplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoxespecplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
