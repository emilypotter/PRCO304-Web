import { TestBed, inject } from '@angular/core/testing';

import { SpotService } from './spot.service';
import { HttpClientModule } from '@angular/common/http';

describe('RegionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([SpotService], (service: SpotService) => {
    expect(service).toBeTruthy();
  }));
});
