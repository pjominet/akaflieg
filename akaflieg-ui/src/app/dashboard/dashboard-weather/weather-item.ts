export class WeatherItem {
    public cityName: string;
    public pressure: string;
    public cloudsDescription: string;
    public iconName: string;
    public humidity: number;
    public temperature: number;
    public windSpeed: number;
    public windDirection: string;

    constructor(cityName: string, pressure: string, cloudsDescription: string, iconName: string,
                humidity: number, temperature: number, windSpeed: number, windDirection: string) {
        this.cityName = cityName;
        this.pressure = pressure;
        this.cloudsDescription = cloudsDescription;
        this.iconName = iconName;
        this.humidity = humidity;
        this.temperature = temperature;
        this.windSpeed = windSpeed;
        this.windDirection = windDirection;
    }
}
