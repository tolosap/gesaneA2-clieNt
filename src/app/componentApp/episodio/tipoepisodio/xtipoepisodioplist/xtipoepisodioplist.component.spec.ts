import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtipoepisodioplistComponent } from './xtipoepisodioplist.component';

describe('XtipoepisodioplistComponent', () => {
  let component: XtipoepisodioplistComponent;
  let fixture: ComponentFixture<XtipoepisodioplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtipoepisodioplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtipoepisodioplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
