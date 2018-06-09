import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmedicoviewComponent } from './xmedicoview.component';

describe('XmedicoviewComponent', () => {
  let component: XmedicoviewComponent;
  let fixture: ComponentFixture<XmedicoviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmedicoviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmedicoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
