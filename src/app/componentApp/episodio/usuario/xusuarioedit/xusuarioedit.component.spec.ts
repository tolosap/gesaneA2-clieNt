import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XusuarioeditComponent } from './xusuarioedit.component';

describe('XusuarioeditComponent', () => {
  let component: XusuarioeditComponent;
  let fixture: ComponentFixture<XusuarioeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XusuarioeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XusuarioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
