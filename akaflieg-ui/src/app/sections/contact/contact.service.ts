import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {
    constructor(private http: Http) {
    }

    sendMail(name: string, from: string, phone: string, message: string) {
        return this.http.post('/mail', JSON.stringify({name: name, from: from, phone: phone, message: message}))
            .map((response: Response) => {
                // sending mail successful
                return response.json();
            });
    }
}
