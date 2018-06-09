import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmedicoeditComponent } from './xmedicoedit.component';

describe('XmedicoeditComponent', () => {
  let component: XmedicoeditComponent;
  let fixture: ComponentFixture<XmedicoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmedicoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmedicoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
