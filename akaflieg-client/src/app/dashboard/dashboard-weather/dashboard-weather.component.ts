import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DashboardWeatherService} from './dashboard-weather.service';
import {WeatherItem} from './weather-item';
import {AlertService} from '../../helpers/alert/alert.service';

@Component({
    selector: 'app-dashboard-weather',
    templateUrl: './dashboard-weather.component.html',
    styleUrls: ['./dashboard-weather.component.scss']
})
export class DashboardWeatherComponent implements OnInit, AfterViewInit {
    public weatherItem: WeatherItem;
    public weatherItems = [];
    public loading = false;

    constructor(private weatherService: DashboardWeatherService, private alertService: AlertService) {
    }

    ngOnInit() {
        this.loadWeather();
    }

    ngAfterViewInit() {
        // no weather items, something went wrong
        if (this.weatherItems.length === 0)
            this.alertService.error('Fehler: API antwortet nicht. Keine Wetterdaten verfügbar.');
    }

    loadWeather(): void {
        this.loading = true;
        // 50.40°, 6.52° = Dahlemer Binz Flugplatz, unknown to api
        // 50.42°, 6.57° = Schmidtheim
        this.weatherService.getWeatherData(50.42, 6.57).subscribe(
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
                this.weatherItems.push(this.weatherItem);
            }
        );
        // 50.93, 6.96 = Köln
        this.weatherService.getWeatherData(50.93, 6.96).subscribe(
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
                this.weatherItems.push(this.weatherItem);
            }
        );

        if (this.weatherItems.length === 0) {
            this.alertService.clear();
            this.alertService.error('Fehler: API antwortet nicht. Keine Wetterdaten verfügbar.');
        }

        this.loading = false;
    }

    private degToCompass(deg: number): string {
        const compassCodes = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const interval = Math.floor((deg / 22.5) + 0.5);
        return compassCodes[interval % 16];
    }
}
