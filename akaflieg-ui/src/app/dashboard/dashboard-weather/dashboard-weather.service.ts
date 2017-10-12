import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashboardWeatherService {
    private apiKey = 'abcbdb8391c5d46d624cb81ecbdd9d91';

    constructor(private http: Http) {
    }

    getWeatherData(lat, lon): Observable<any> {
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +
            '&APPID='+ this.apiKey +'&units=metric&lang=de')
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }
}
