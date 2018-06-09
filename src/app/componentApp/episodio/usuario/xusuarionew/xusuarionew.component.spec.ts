import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XusuarionewComponent } from './xusuarionew.component';

describe('XusuarionewComponent', () => {
  let component: XusuarionewComponent;
  let fixture: ComponentFixture<XusuarionewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XusuarionewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XusuarionewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
