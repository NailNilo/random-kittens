/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DogapiService } from './dogapi.service';

describe('Service: Dogapi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DogapiService]
    });
  });

  it('should ...', inject([DogapiService], (service: DogapiService) => {
    expect(service).toBeTruthy();
  }));
});
