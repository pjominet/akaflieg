import {Component, OnInit} from '@angular/core';
import {DashboardWeatherService} from './dashboard-weather.service';
import {WeatherItem} from './weather-item';

@Component({
    selector: 'app-dashboard-weather',
    templateUrl: './dashboard-weather.component.html',
    styleUrls: ['./dashboard-weather.component.scss']
})
export class DashboardWeatherComponent implements OnInit {
    weatherItem: WeatherItem = new WeatherItem('', '', '', '', null, null, null, '');

    constructor(private weatherService: DashboardWeatherService) {
    }

    ngOnInit() {
        this.weatherService.getWeatherData().subscribe(
            data => {
                this.weatherItem = new WeatherItem(
                    data.name,
                    data.main.pressure,
                    data.weather[0].description,
                    data.weather[0].icon,
                    data.main.humidity,
                    data.main.temp,
                    data.wind.speed,
                    this.degToCompass(data.wind.deg)
                );
            }
        );
    }

    degToCompass(deg: number): string {
        const compassCodes = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const interval = Math.floor((deg / 22.5) + 0.5);
        return compassCodes[interval % 16];
    }
}
