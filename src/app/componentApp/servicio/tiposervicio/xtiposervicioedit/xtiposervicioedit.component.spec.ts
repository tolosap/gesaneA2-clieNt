import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtiposervicioeditComponent } from './xtiposervicioedit.component';

describe('XtiposervicioeditComponent', () => {
  let component: XtiposervicioeditComponent;
  let fixture: ComponentFixture<XtiposervicioeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtiposervicioeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtiposervicioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
