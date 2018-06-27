import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class DashboardCmsService {
    private headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});

    constructor(private http: HttpClient) {
    }

    public upload(file: FormData) {
        return this.http.post(environment.dataServiceURI + '/upload', file, {headers: this.headers}).pipe(
            map((response: HttpResponse<any>) => response));
    }
}
