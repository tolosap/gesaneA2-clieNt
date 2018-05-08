import { TestBed, inject } from '@angular/core/testing';

import { SessionServerCallService } from './session-server-call.service';

describe('SessionServerCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionServerCallService]
    });
  });

  it('should be created', inject([SessionServerCallService], (service: SessionServerCallService) => {
    expect(service).toBeTruthy();
  }));
});
