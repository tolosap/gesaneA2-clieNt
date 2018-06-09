import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XepisodioeditComponent } from './xepisodioedit.component';

describe('XepisodioeditComponent', () => {
  let component: XepisodioeditComponent;
  let fixture: ComponentFixture<XepisodioeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XepisodioeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XepisodioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
