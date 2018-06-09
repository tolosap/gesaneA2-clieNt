import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdestinoaltanewComponent } from './xdestinoaltanew.component';

describe('XdestinoaltanewComponent', () => {
  let component: XdestinoaltanewComponent;
  let fixture: ComponentFixture<XdestinoaltanewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdestinoaltanewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdestinoaltanewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
