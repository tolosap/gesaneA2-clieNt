import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdestinoaltaeditComponent } from './xdestinoaltaedit.component';

describe('XdestinoaltaeditComponent', () => {
  let component: XdestinoaltaeditComponent;
  let fixture: ComponentFixture<XdestinoaltaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdestinoaltaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdestinoaltaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
