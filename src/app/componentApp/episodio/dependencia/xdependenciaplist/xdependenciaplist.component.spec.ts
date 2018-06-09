import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdependenciaplistComponent } from './xdependenciaplist.component';

describe('XdependenciaplistComponent', () => {
  let component: XdependenciaplistComponent;
  let fixture: ComponentFixture<XdependenciaplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdependenciaplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdependenciaplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
