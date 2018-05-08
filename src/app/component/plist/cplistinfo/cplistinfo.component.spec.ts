import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CplistinfoComponent } from './cplistinfo.component';

describe('CplistinfoComponent', () => {
  let component: CplistinfoComponent;
  let fixture: ComponentFixture<CplistinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CplistinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CplistinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
