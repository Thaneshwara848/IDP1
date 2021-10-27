import { TestBed } from '@angular/core/testing';

import { ServDemoService } from './serv-demo.service';

describe('ServDemoService', () => {
  let service: ServDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
