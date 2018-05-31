
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import {User} from './user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
    }

    public getAll() {
        return this.http.get('/users').pipe(
            map((response: HttpResponse<any>) => response));
    }

    public getById(id: number) {
        return this.http.get('/users/' + id).pipe(
            map((response: HttpResponse<any>) => response));
    }

    public create(user: User) {
        return this.http.post('/users/register', user).pipe(
            map((response: HttpResponse<any>) => response))
    }

    private authorize() {
        // create authorization header with authorize token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new HttpHeaders({'Authorization': 'Bearer ' + currentUser.token});
            // return new RequestOptions({headers: headers});
        }
    }
}
