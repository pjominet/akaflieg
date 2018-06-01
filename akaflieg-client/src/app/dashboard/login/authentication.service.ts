import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {
    }

    public login(username: string, password: string) {
        return this.http.post<any>( environment.dataServiceURI + '/login',
            JSON.stringify({username: username, password: password}), {headers: this.headers}).pipe(
            map((response: HttpResponse<any>) => {
                // login successful if there's a authorize token in the response
                const auth_token = response.headers.get('Authorization').valueOf();
                const auth_expiration = response.headers.get('Expires').valueOf();
                console.log(auth_token);
                if (response && auth_token) {
                    // store user details and authorize token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: auth_token}));
                    localStorage.setItem('expiration', JSON.stringify(auth_expiration));
                }
            }));
    }

    public logout(): void {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('expiration');
    }

    public isAuthenticated(): boolean {
        const currentTime = (new Date).getTime();
        const sessionExpiration = JSON.parse(localStorage.getItem('Expiration'));
        return currentTime < sessionExpiration;
    }
}
