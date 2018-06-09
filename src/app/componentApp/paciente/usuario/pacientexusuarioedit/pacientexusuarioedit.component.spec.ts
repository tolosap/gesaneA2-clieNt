import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientexusuarioeditComponent } from './pacientexusuarioedit.component';

describe('PacientexusuarioeditComponent', () => {
  let component: PacientexusuarioeditComponent;
  let fixture: ComponentFixture<PacientexusuarioeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientexusuarioeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientexusuarioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
