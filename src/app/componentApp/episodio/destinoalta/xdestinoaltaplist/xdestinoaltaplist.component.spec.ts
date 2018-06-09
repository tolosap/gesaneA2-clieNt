import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdestinoaltaplistComponent } from './xdestinoaltaplist.component';

describe('XdestinoaltaplistComponent', () => {
  let component: XdestinoaltaplistComponent;
  let fixture: ComponentFixture<XdestinoaltaplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdestinoaltaplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdestinoaltaplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
