import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XservicioeditComponent } from './xservicioedit.component';

describe('XservicioeditComponent', () => {
  let component: XservicioeditComponent;
  let fixture: ComponentFixture<XservicioeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XservicioeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XservicioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
