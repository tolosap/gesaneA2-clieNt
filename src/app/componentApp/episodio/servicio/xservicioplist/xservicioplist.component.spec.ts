import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XservicioplistComponent } from './xservicioplist.component';

describe('XservicioplistComponent', () => {
  let component: XservicioplistComponent;
  let fixture: ComponentFixture<XservicioplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XservicioplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XservicioplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
