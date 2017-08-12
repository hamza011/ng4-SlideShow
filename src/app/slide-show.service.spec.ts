import { TestBed, inject } from '@angular/core/testing';

import { SlideShowService } from './slide-show.service';

describe('SlideShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideShowService]
    });
  });

  it('should be created', inject([SlideShowService], (service: SlideShowService) => {
    expect(service).toBeTruthy();
  }));
});
