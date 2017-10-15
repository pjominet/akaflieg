import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

@Injectable()
export class NewsService {

    constructor(private http: Http) {
    }

    getAll() {
        return this.http.get('/news')
            .map((res: Response) => res.json());
    }

    addItem(title: string, body: string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this.http.post('/news/add',
            JSON.stringify({title: title, body: body}), options)
            .map((res: Response) => res.json());
    }

}
