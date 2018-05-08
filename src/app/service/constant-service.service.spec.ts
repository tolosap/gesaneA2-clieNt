import { TestBed, inject } from '@angular/core/testing';

import { ConstantServiceService } from './constant-service.service';

describe('ConstantServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstantServiceService]
    });
  });

  it('should be created', inject([ConstantServiceService], (service: ConstantServiceService) => {
    expect(service).toBeTruthy();
  }));
});
