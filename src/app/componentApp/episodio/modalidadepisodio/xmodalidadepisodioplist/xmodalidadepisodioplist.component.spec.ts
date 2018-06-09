import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmodalidadepisodioplistComponent } from './xmodalidadepisodioplist.component';

describe('XmodalidadepisodioplistComponent', () => {
  let component: XmodalidadepisodioplistComponent;
  let fixture: ComponentFixture<XmodalidadepisodioplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmodalidadepisodioplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmodalidadepisodioplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
