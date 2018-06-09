import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XfacturaeditComponent } from './xfacturaedit.component';

describe('XfacturaeditComponent', () => {
  let component: XfacturaeditComponent;
  let fixture: ComponentFixture<XfacturaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XfacturaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XfacturaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
