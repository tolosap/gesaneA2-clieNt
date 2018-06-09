import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtipousuarioeditComponent } from './xtipousuarioedit.component';

describe('XtipousuarioeditComponent', () => {
  let component: XtipousuarioeditComponent;
  let fixture: ComponentFixture<XtipousuarioeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtipousuarioeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtipousuarioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
