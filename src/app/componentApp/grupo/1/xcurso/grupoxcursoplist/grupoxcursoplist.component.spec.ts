import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoxcursoplistComponent } from './grupoxcursoplist.component';

describe('GrupoxcursoplistComponent', () => {
  let component: GrupoxcursoplistComponent;
  let fixture: ComponentFixture<GrupoxcursoplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoxcursoplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoxcursoplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
