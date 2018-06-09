import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenxcentrosannewComponent } from './depenxcentrosannew.component';

describe('DepenxcentrosannewComponent', () => {
  let component: DepenxcentrosannewComponent;
  let fixture: ComponentFixture<DepenxcentrosannewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepenxcentrosannewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepenxcentrosannewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
