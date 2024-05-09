import { TestBed } from '@angular/core/testing';

import { FakeSessionitemService } from './fake-sessionitem.service';

describe('FakeSessionitemService', () => {
  let service: FakeSessionitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeSessionitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
