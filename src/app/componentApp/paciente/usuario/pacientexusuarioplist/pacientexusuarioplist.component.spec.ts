import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientexusuarioplistComponent } from './pacientexusuarioplist.component';

describe('PacientexusuarioplistComponent', () => {
  let component: PacientexusuarioplistComponent;
  let fixture: ComponentFixture<PacientexusuarioplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientexusuarioplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientexusuarioplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
