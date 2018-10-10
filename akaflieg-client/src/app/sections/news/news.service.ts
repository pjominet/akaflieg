
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class NewsService {

    constructor(private http: HttpClient) {
    }

    public getAll() {
        return this.http.get( environment.dataServiceURI + '/news/all').pipe(
            map((response: HttpResponse<any>) => response));
    }

    public addItem(title: string, content: string) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this.http.post( environment.dataServiceURI + '/news/add',
            JSON.stringify({title: title, content: content})).pipe(
            map((response: HttpResponse<any>) => response));
    }

    public getMock() {
        return this.http.get( './assets/data/news.json').pipe(
            map((response: HttpResponse<any>) => response));
    }
}
