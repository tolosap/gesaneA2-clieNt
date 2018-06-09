import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtipoepisodioeditComponent } from './xtipoepisodioedit.component';

describe('XtipoepisodioeditComponent', () => {
  let component: XtipoepisodioeditComponent;
  let fixture: ComponentFixture<XtipoepisodioeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtipoepisodioeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtipoepisodioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
