import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodioremove1Component } from './episodioremove1.component';

describe('Episodioremove1Component', () => {
  let component: Episodioremove1Component;
  let fixture: ComponentFixture<Episodioremove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Episodioremove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Episodioremove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
