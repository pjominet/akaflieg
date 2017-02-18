import {Component, OnInit} from '@angular/core';
import {DashboardWeatherService} from './dashboard-weather.service'
import {WeatherItem} from './weather-item';

@Component({
    selector: 'dashboard-weather',
    templateUrl: './dashboard-weather.component.html',
    styleUrls: ['./dashboard-weather.component.scss']
})
export class DashboardWeatherComponent implements OnInit {
    weatherItem: WeatherItem;
    constructor(private weatherService: DashboardWeatherService) {}

    ngOnInit() {
        this.weatherService.getWeatherData().subscribe(
            data => {
                this.weatherItem = new WeatherItem(
                    data.name,
                    data.weather[0].description,
                    data.main.humidity,
                    data.main.temp,
                    data.wind.speed,
                    data.wind.deg
                );
                console.log(this.weatherItem);
            }
        );
    }
}