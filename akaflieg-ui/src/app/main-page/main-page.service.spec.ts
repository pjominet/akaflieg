/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainPageService } from './main-page.service';

describe('MainPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainPageService]
    });
  });

  it('should ...', inject([MainPageService], (service: MainPageService) => {
    expect(service).toBeTruthy();
  }));
});
