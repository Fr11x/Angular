import { TestBed } from '@angular/core/testing';

import { HuilesServicesService } from './huiles-services.service';

describe('HuilesServicesService', () => {
  let service: HuilesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuilesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
