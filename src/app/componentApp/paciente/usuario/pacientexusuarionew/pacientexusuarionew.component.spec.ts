import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientexusuarionewComponent } from './pacientexusuarionew.component';

describe('PacientexusuarionewComponent', () => {
  let component: PacientexusuarionewComponent;
  let fixture: ComponentFixture<PacientexusuarionewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientexusuarionewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientexusuarionewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
