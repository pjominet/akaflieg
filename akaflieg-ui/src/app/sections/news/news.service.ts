import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

@Injectable()
export class NewsService {

    constructor(private http: Http) {
    }

    getAllNews() {
        return this.http.get('http://localhost:8080/news')
            .map((res: Response) => res.json());
    }

    addNewElement(header: string, body: string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this.http.post('http://localhost:8080/news/add',
            JSON.stringify({header: header, body: body}), options)
            .map((res: Response) => res.json());
    }

}
