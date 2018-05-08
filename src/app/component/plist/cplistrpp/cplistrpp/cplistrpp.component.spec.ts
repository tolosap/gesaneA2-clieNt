import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CplistrppComponent } from './cplistrpp.component';

describe('CplistrppComponent', () => {
  let component: CplistrppComponent;
  let fixture: ComponentFixture<CplistrppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CplistrppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CplistrppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
