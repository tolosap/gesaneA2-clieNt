import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pacienteremove1Component } from './pacienteremove1.component';

describe('Pacienteremove1Component', () => {
  let component: Pacienteremove1Component;
  let fixture: ComponentFixture<Pacienteremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pacienteremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pacienteremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
