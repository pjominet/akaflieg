import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {
    to = 'test';

    constructor(private http: Http) {
    }

    sendMail(name: string, from: string, phone: string, message: string) {
        return this.http.post('/mail',
            JSON.stringify(
                {
                    name: name,
                    sender: from,
                    recipient: this.to,
                    phone: phone,
                    subject: 'Kontakt via Webformular',
                    message: message
                }))
            .map((response: Response) => {
                // sending mail successful
                return response.json();
            });
    }
}
