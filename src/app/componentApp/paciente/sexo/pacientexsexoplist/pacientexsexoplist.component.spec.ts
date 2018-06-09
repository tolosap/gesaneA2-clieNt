import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientexsexoplistComponent } from './pacientexsexoplist.component';

describe('PacientexsexoplistComponent', () => {
  let component: PacientexsexoplistComponent;
  let fixture: ComponentFixture<PacientexsexoplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientexsexoplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientexsexoplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
