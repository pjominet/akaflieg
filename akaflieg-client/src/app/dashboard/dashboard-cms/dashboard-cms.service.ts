import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class DashboardCmsService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {
    }

    public upload(section: string, data: string, pubDate: string, mimetype: string) {
        return this.http.post(environment.dataServiceURI + '/files/upload',
            JSON.stringify(
                {
                    section: section,
                    data: data,
                    pubDate: pubDate,
                    mimetype: mimetype
                }
            ), {headers: this.headers}).pipe(
            map((response: HttpResponse<any>) => response));
    }
}
