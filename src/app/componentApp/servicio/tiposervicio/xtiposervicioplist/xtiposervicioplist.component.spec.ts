import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtiposervicioplistComponent } from './xtiposervicioplist.component';

describe('XtiposervicioplistComponent', () => {
  let component: XtiposervicioplistComponent;
  let fixture: ComponentFixture<XtiposervicioplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtiposervicioplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtiposervicioplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
