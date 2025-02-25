import { TestBed } from '@angular/core/testing';

import { AluminumService } from './aluminum.service';

describe('AluminumService', () => {
  let service: AluminumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AluminumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
