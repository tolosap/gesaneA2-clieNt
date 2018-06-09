import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmediconewComponent } from './xmediconew.component';

describe('XmediconewComponent', () => {
  let component: XmediconewComponent;
  let fixture: ComponentFixture<XmediconewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmediconewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmediconewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
