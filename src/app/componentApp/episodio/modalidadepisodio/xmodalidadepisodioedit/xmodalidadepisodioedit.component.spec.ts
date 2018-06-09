import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmodalidadepisodioeditComponent } from './xmodalidadepisodioedit.component';

describe('XmodalidadepisodioeditComponent', () => {
  let component: XmodalidadepisodioeditComponent;
  let fixture: ComponentFixture<XmodalidadepisodioeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmodalidadepisodioeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmodalidadepisodioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
