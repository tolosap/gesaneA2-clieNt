import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CplistpaginationComponent } from './cplistpagination.component';

describe('CplistpaginationComponent', () => {
  let component: CplistpaginationComponent;
  let fixture: ComponentFixture<CplistpaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CplistpaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CplistpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
