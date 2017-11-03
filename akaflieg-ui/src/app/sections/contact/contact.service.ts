import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {
    private to = environment.mailTo;

    constructor(private http: Http) {
    }

    public sendMail(name: string, from: string, subject: string, message: string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this.http.post(environment.dataServiceURI + '/mail',
            JSON.stringify(
                {
                    name: name,
                    sender: from,
                    recipient: this.to,
                    subject: subject,
                    message: message
                }), options)
            .map((response: Response) => {
                // sending mail successful
                return response.json();
            });
    }
}
