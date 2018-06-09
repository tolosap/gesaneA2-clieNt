import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmedicoplistComponent } from './xmedicoplist.component';

describe('XmedicoplistComponent', () => {
  let component: XmedicoplistComponent;
  let fixture: ComponentFixture<XmedicoplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmedicoplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmedicoplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
