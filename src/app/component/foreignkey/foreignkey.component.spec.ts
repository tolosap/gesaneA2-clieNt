import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignkeyComponent } from './foreignkey.component';

describe('ForeignkeyComponent', () => {
  let component: ForeignkeyComponent;
  let fixture: ComponentFixture<ForeignkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
