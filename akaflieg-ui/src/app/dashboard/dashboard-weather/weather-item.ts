/**
 * Created by Patrick on 14.1.17.
 */
export class WeatherItem {
    constructor(public _cityName: string,
                public _cloudsDescription: string,
                public _humidity: number,
                public _temperature: number,
                public _windSpeed: number,
                public _windDirection: number) {}
}