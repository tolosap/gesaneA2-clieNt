import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenxtipodepenplistComponent } from './depenxtipodepenplist.component';

describe('DepenxtipodepenplistComponent', () => {
  let component: DepenxtipodepenplistComponent;
  let fixture: ComponentFixture<DepenxtipodepenplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepenxtipodepenplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepenxtipodepenplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
