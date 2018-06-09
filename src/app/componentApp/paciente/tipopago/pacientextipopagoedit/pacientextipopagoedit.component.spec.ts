import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientextipopagoeditComponent } from './pacientextipopagoedit.component';

describe('PacientextipopagoeditComponent', () => {
  let component: PacientextipopagoeditComponent;
  let fixture: ComponentFixture<PacientextipopagoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientextipopagoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientextipopagoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
