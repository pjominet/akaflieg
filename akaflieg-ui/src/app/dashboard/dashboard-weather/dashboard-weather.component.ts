import { Component, OnInit } from '@angular/core';
import {DashboardWeatherService} from './dashboard-weather.service'
import {WeatherItem} from './weather-item';

@Component({
  selector: 'dashboard-weather',
  templateUrl: './dashboard-weather.component.html',
  styleUrls: ['./dashboard-weather.component.scss']
})
export class DashboardWeatherComponent implements OnInit {

  constructor(private weatherService: DashboardWeatherService) {}

  ngOnInit() {
    this.weatherService.getWeatherData().subscribe(
        data => {
            const weatherBinz = new WeatherItem(
                data.name,
                data.clouds,
                data.weather[0].description,
                data.main.temp,
                data.wind.speed,
                data.wind.deg,
                data.rain
            );
        }
    );
  }

}
