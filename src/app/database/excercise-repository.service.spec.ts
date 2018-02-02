import { TestBed, inject } from '@angular/core/testing';

import { ExcerciseRepositoryService } from './excercise-repository.service';

describe('ExcerciseRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcerciseRepositoryService]
    });
  });

  it('should be created', inject([ExcerciseRepositoryService], (service: ExcerciseRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
