import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtipousuarionewComponent } from './xtipousuarionew.component';

describe('XtipousuarionewComponent', () => {
  let component: XtipousuarionewComponent;
  let fixture: ComponentFixture<XtipousuarionewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtipousuarionewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtipousuarionewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
