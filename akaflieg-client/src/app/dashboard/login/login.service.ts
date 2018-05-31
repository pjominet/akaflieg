
import {throwError as observableThrowError, Observable} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';




@Injectable()
export class LoginService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {
    }

    public login(username: string, password: string): Observable<boolean> {
        return this.http.post( environment.dataServiceURI + '/login',
            JSON.stringify({username: username, password: password}), {headers: this.headers}).pipe(
            map((response: HttpResponse<any>) => {
                // login successful if there's a authorize token in the response
                const token = response;
                console.log(token);
                if (token) {
                    // store user details and authorize token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
                    return true;
                } else {
                    return false
                }
            }),catchError((error: any) => observableThrowError(error.json().error || 'Server error')),);
    }

    public logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
