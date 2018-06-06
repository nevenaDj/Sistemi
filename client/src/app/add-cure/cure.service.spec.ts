import { TestBed, inject } from '@angular/core/testing';

import { CureService } from './cure.service';

describe('CureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CureService]
    });
  });

  it('should be created', inject([CureService], (service: CureService) => {
    expect(service).toBeTruthy();
  }));
});
