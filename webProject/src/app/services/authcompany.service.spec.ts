import { TestBed } from '@angular/core/testing';

import { AuthcompanyService } from './authcompany.service';

describe('AuthcompanyService', () => {
  let service: AuthcompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthcompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
