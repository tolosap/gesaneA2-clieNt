import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenxtipodepennewComponent } from './depenxtipodepennew.component';

describe('DepenxtipodepennewComponent', () => {
  let component: DepenxtipodepennewComponent;
  let fixture: ComponentFixture<DepenxtipodepennewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepenxtipodepennewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepenxtipodepennewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
