import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable()
export class ContactService {
    private to = environment.mailTo;

    constructor(private http: HttpClient) {
    }

    public sendMail(name: string, from: string, subject: string, message: string) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this.http.post(environment.dataServiceURI + '/mail/send',
            JSON.stringify(
                {
                    name: name,
                    sender: from,
                    recipient: this.to,
                    subject: subject,
                    message: message
                }), {headers: headers})
            .pipe(map((response: HttpResponse<any>) => {
                // sending mail successful
                return response;
            }));
    }
}
