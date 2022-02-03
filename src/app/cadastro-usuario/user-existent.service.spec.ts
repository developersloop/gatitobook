import { TestBed } from '@angular/core/testing';

import { UserExistentService } from './user-existent.service';

describe('UserExistentService', () => {
  let service: UserExistentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserExistentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
