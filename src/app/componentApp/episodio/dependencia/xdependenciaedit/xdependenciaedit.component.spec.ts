import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdependenciaeditComponent } from './xdependenciaedit.component';

describe('XdependenciaeditComponent', () => {
  let component: XdependenciaeditComponent;
  let fixture: ComponentFixture<XdependenciaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdependenciaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdependenciaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
