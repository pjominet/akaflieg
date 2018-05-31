import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class DashboardCmsService {
    constructor(private http: HttpClient) {
    }

    public upload(file: FormData) {
        const headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});

        this.http.post(environment.dataServiceURI + '/file/upload', file).pipe(
            map((res: HttpResponse<any>) => res));
    }
}
