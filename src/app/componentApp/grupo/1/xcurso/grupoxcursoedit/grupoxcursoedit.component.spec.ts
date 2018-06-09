import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoxcursoeditComponent } from './grupoxcursoedit.component';

describe('GrupoxcursoeditComponent', () => {
  let component: GrupoxcursoeditComponent;
  let fixture: ComponentFixture<GrupoxcursoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoxcursoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoxcursoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
