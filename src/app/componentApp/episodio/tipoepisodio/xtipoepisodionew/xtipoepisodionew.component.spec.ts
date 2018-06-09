import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtipoepisodionewComponent } from './xtipoepisodionew.component';

describe('XtipoepisodionewComponent', () => {
  let component: XtipoepisodionewComponent;
  let fixture: ComponentFixture<XtipoepisodionewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtipoepisodionewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtipoepisodionewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
