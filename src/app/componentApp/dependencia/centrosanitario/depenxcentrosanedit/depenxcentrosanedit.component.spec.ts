import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenxcentrosaneditComponent } from './depenxcentrosanedit.component';

describe('DepenxcentrosaneditComponent', () => {
  let component: DepenxcentrosaneditComponent;
  let fixture: ComponentFixture<DepenxcentrosaneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepenxcentrosaneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepenxcentrosaneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
