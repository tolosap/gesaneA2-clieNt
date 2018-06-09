import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XepisodioplistComponent } from './xepisodioplist.component';

describe('XepisodioplistComponent', () => {
  let component: XepisodioplistComponent;
  let fixture: ComponentFixture<XepisodioplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XepisodioplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XepisodioplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
