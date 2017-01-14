/**
 * Created by Patrick on 14.1.17.
 */
export class WeatherItem {
    constructor(public _cityName: string,
                public _clouds: string,
                public _cloudsDescription: string,
                public _temperature: number,
                public _windSpeed: number,
                public _windDirection: number,
                public _rain: number) {}

    private get cityName(): string {
        return this._cityName;
    }

    private get clouds(): string {
        return this._clouds;
    }

    private get cloudsDescription(): string {
        return this._cloudsDescription;
    }

    private get temperature(): number {
        return this._temperature;
    }

    private get windSpeed(): number {
        return this._windSpeed;
    }

    private get windDirection(): number {
        return this._windDirection;
    }

    private get rain(): number {
        return this._rain;
    }
}