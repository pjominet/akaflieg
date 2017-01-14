/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardWeatherService } from './dashboard-weather.service';

describe('DashboardWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardWeatherService]
    });
  });

  it('should ...', inject([DashboardWeatherService], (service: DashboardWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
