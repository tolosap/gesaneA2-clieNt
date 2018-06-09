import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenxtipodepeneditComponent } from './depenxtipodepenedit.component';

describe('DepenxtipodepeneditComponent', () => {
  let component: DepenxtipodepeneditComponent;
  let fixture: ComponentFixture<DepenxtipodepeneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepenxtipodepeneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepenxtipodepeneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
