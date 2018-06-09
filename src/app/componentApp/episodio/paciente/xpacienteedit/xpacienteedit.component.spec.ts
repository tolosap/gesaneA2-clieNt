import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpacienteeditComponent } from './xpacienteedit.component';

describe('XpacienteeditComponent', () => {
  let component: XpacienteeditComponent;
  let fixture: ComponentFixture<XpacienteeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpacienteeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpacienteeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
