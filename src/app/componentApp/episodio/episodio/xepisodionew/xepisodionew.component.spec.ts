import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XepisodionewComponent } from './xepisodionew.component';

describe('XepisodionewComponent', () => {
  let component: XepisodionewComponent;
  let fixture: ComponentFixture<XepisodionewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XepisodionewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XepisodionewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
