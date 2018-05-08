import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistheaderComponent } from './plistheader.component';

describe('PlistheaderComponent', () => {
  let component: PlistheaderComponent;
  let fixture: ComponentFixture<PlistheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlistheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
