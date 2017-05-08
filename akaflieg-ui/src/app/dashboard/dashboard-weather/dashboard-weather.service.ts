import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashboardWeatherService {

    constructor(private http: Http) {
    }

    getWeatherData(): Observable<any> {
        // 50.405889°, 6.528083° = Dahlemer Binz Flugplatz, unknown to api
        // 50.42°, 6.57° = Schmidtheim
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=50.42&lon=6.57' +
            '&APPID=abcbdb8391c5d46d624cb81ecbdd9d91&units=metric&lang=de')
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }
}
