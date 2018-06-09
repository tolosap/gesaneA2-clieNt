import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcircunstanciasaltaplistComponent } from './xcircunstanciasaltaplist.component';

describe('XcircunstanciasaltaplistComponent', () => {
  let component: XcircunstanciasaltaplistComponent;
  let fixture: ComponentFixture<XcircunstanciasaltaplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcircunstanciasaltaplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcircunstanciasaltaplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
