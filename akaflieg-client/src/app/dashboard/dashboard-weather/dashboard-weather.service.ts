import 'rxjs';
import {throwError as observableThrowError, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DashboardWeatherService {
    private apiKey = 'abcbdb8391c5d46d624cb81ecbdd9d91';

    constructor(private http: HttpClient) {
    }

    public getWeatherData(lat, lon): Observable<any> {
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +
            '&APPID=' + this.apiKey + '&units=metric&lang=de').pipe(
            map(response => response),
            catchError(error => {
                console.error(error);
                return observableThrowError(error.json());
            }));
    }
}
