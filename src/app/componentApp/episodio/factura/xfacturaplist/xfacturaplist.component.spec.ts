import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XfacturaplistComponent } from './xfacturaplist.component';

describe('XfacturaplistComponent', () => {
  let component: XfacturaplistComponent;
  let fixture: ComponentFixture<XfacturaplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XfacturaplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XfacturaplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
