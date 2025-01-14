import 'rxjs';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class DashboardWeatherService {
    private apiKey = 'abcbdb8391c5d46d624cb81ecbdd9d91';

    constructor(private http: HttpClient) {
    }

    public getWeatherData(lat, lon): Observable<any> {
        return this.http.get(environment.weatherServiceURI + '?lat=' + lat + '&lon=' + lon +
            '&APPID=' + this.apiKey + '&units=metric&lang=de')
            .pipe(map(response => response));
    }
}
