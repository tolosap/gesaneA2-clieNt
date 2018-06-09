import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdependencianewComponent } from './xdependencianew.component';

describe('XdependencianewComponent', () => {
  let component: XdependencianewComponent;
  let fixture: ComponentFixture<XdependencianewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdependencianewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdependencianewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
