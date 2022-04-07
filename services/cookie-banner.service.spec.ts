import { TestBed } from '@angular/core/testing';

import { CookieBannerService } from './cookie-banner.service';

describe('CookieBannerService', () => {
  let service: CookieBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
