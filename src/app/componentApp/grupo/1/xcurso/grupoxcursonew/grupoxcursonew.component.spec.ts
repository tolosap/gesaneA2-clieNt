import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoxcursonewComponent } from './grupoxcursonew.component';

describe('GrupoxcursonewComponent', () => {
  let component: GrupoxcursonewComponent;
  let fixture: ComponentFixture<GrupoxcursonewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoxcursonewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoxcursonewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
