import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcircunstanciasaltanewComponent } from './xcircunstanciasaltanew.component';

describe('XcircunstanciasaltanewComponent', () => {
  let component: XcircunstanciasaltanewComponent;
  let fixture: ComponentFixture<XcircunstanciasaltanewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcircunstanciasaltanewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcircunstanciasaltanewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
