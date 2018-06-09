import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientextipopagonewComponent } from './pacientextipopagonew.component';

describe('PacientextipopagonewComponent', () => {
  let component: PacientextipopagonewComponent;
  let fixture: ComponentFixture<PacientextipopagonewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientextipopagonewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientextipopagonewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
