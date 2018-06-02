import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {
    }

    public login(username: string, password: string) {
        return this.http.post<any>( environment.dataServiceURI + '/login',
            JSON.stringify({username: username, password: password}), {headers: this.headers})
            .pipe(map((response: any) => {
                // login successful if there's a authorize token in the response
                if (response && response.token)
                    // store user details and authorize token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: response.token}));
            }));
    }

    public logout(): void {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
