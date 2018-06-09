import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtiposervicionewComponent } from './xtiposervicionew.component';

describe('XtiposervicionewComponent', () => {
  let component: XtiposervicionewComponent;
  let fixture: ComponentFixture<XtiposervicionewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtiposervicionewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtiposervicionewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
