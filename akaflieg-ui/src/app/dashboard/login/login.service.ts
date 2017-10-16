import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post('/login',
            JSON.stringify({username: username, password: password}), {headers: this.headers})
            .map((response: Response) => {
                // login successful if there's a authorize token in the response
                const token = response.json() && response.json().token;
                console.log(token);
                if (token) {
                    // store user details and authorize token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
                    return true;
                } else {
                    return false
                }
            }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
