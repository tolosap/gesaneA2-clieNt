import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcircunstanciasaltaeditComponent } from './xcircunstanciasaltaedit.component';

describe('XcircunstanciasaltaeditComponent', () => {
  let component: XcircunstanciasaltaeditComponent;
  let fixture: ComponentFixture<XcircunstanciasaltaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcircunstanciasaltaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcircunstanciasaltaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
