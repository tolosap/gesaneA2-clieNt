import { TestBed, inject } from '@angular/core/testing';

import { SharedSpaceService } from './shared-space.service';

describe('SharedSpaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedSpaceService]
    });
  });

  it('should be created', inject([SharedSpaceService], (service: SharedSpaceService) => {
    expect(service).toBeTruthy();
  }));
});
