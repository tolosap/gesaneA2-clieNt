import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XusuarioplistComponent } from './xusuarioplist.component';

describe('XusuarioplistComponent', () => {
  let component: XusuarioplistComponent;
  let fixture: ComponentFixture<XusuarioplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XusuarioplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XusuarioplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
