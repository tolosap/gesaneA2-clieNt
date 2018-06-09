import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenxcentrosanplistComponent } from './depenxcentrosanplist.component';

describe('DepenxcentrosanplistComponent', () => {
  let component: DepenxcentrosanplistComponent;
  let fixture: ComponentFixture<DepenxcentrosanplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepenxcentrosanplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepenxcentrosanplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
