import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodioview1Component } from './episodioview1.component';

describe('Episodioview1Component', () => {
  let component: Episodioview1Component;
  let fixture: ComponentFixture<Episodioview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Episodioview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Episodioview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
