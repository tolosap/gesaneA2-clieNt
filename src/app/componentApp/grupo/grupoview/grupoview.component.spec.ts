import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoviewComponent } from './grupoview.component';

describe('GrupoviewComponent', () => {
  let component: GrupoviewComponent;
  let fixture: ComponentFixture<GrupoviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
