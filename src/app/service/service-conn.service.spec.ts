import { TestBed, inject } from '@angular/core/testing';

import { ServiceConnService } from './service-conn.service';

describe('ServiceConnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceConnService]
    });
  });

  it('should be created', inject([ServiceConnService], (service: ServiceConnService) => {
    expect(service).toBeTruthy();
  }));
});
