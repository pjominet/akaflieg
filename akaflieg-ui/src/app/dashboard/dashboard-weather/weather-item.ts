export class WeatherItem {
    constructor(public cityName: string,
                public pressure: string,
                public cloudsDescription: string,
                public iconName: string,
                public humidity: number,
                public temperature: number,
                public windSpeed: number,
                public windDirection: string) {
    }
}
