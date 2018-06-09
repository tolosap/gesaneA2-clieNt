import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XfacturanewComponent } from './xfacturanew.component';

describe('XfacturanewComponent', () => {
  let component: XfacturanewComponent;
  let fixture: ComponentFixture<XfacturanewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XfacturanewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XfacturanewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
