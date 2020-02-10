import { TestBed } from '@angular/core/testing';

import { MainSiteEventsService } from './main-site-events.service';

describe('MainSiteEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainSiteEventsService = TestBed.get(MainSiteEventsService);
    expect(service).toBeTruthy();
  });
});
