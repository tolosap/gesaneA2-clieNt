import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XservicionewComponent } from './xservicionew.component';

describe('XservicionewComponent', () => {
  let component: XservicionewComponent;
  let fixture: ComponentFixture<XservicionewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XservicionewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XservicionewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
