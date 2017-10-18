import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import * as globals from '../../helpers/globals';

@Injectable()
export class DashboardCmsService {
    constructor(private http: Http) {
    }

    upload(file: FormData) {
        const headers = new Headers({'Content-Type': 'multipart/form-data'});
        const options = new RequestOptions({headers: headers});

        this.http.post(globals.dataServiceURI + '/file/upload', file, options)
            .map((res: Response) => res.json());
    }
}
