import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmodalidadepisodionewComponent } from './xmodalidadepisodionew.component';

describe('XmodalidadepisodionewComponent', () => {
  let component: XmodalidadepisodionewComponent;
  let fixture: ComponentFixture<XmodalidadepisodionewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmodalidadepisodionewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmodalidadepisodionewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
