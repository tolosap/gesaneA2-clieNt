import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CplistvisiblefieldsComponent } from './cplistvisiblefields.component';

describe('CplistvisiblefieldsComponent', () => {
  let component: CplistvisiblefieldsComponent;
  let fixture: ComponentFixture<CplistvisiblefieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CplistvisiblefieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CplistvisiblefieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
