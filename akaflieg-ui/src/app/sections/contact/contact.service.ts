import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {
    to = environment.mailTo;

    constructor(private http: Http) {
    }

    sendMail(name: string, from: string, phone: string, message: string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this.http.post(environment.dataServiceURI + '/mail',
            JSON.stringify(
                {
                    name: name,
                    sender: from,
                    recipient: this.to,
                    phone: phone,
                    subject: 'Kontakt via Webformular',
                    message: message
                }), options)
            .map((response: Response) => {
                // sending mail successful
                return response.json();
            });
    }
}
