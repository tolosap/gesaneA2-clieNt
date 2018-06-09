import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientextipopagoplistComponent } from './pacientextipopagoplist.component';

describe('PacientextipopagoplistComponent', () => {
  let component: PacientextipopagoplistComponent;
  let fixture: ComponentFixture<PacientextipopagoplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientextipopagoplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientextipopagoplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
