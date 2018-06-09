import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoxcentrosanplistComponent } from './medicoxcentrosanplist.component';

describe('MedicoxcentrosanplistComponent', () => {
  let component: MedicoxcentrosanplistComponent;
  let fixture: ComponentFixture<MedicoxcentrosanplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoxcentrosanplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoxcentrosanplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
