import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {User} from './user';

@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    getAll() {
        return this.http.get('/users',
            this.authorize())
            .map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/users/' + id,
            this.authorize())
            .map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/users/register',
            user, this.authorize())
            .map((response: Response) => response.json())
    }

    private authorize() {
        // create authorization header with authorize token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({headers: headers});
        }
    }
}
